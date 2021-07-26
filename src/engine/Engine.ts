import { get, isArray, isPlainObject, set } from 'lodash';
import Joi from 'joi';

import { defaultOperators } from './../operators/defaultOperators/index';

import { engineOperatorValidator } from '../operators/validators';
import { EngineConfig, Operation, Operator } from 'types';

import { defaultEngineConfig } from './index';
import { engineConfigValidator, operationValidator } from './vallidators';

export class Engine {
  config: EngineConfig;
  operators: Record<string, Operator>;

  constructor(operators: Record<string, Operator>, config: EngineConfig) {
    Engine.validateOperators(operators);
    Engine.validateConfig(config);

    this.operators = { ...defaultOperators, ...operators };
    this.config = { ...defaultEngineConfig, ...config };
  }

  static validateConfig(config: EngineConfig) {
    const result = engineConfigValidator.validate(config, { abortEarly: true });

    if (result.error) {
      throw new Error('Invalid config provided');
    }
  }

  static validateOperators(operators: Record<string, Operator>) {
    const result = Joi.object().pattern(/.*/, [engineOperatorValidator]).validate(operators, { abortEarly: true });

    if (result.error) {
      throw new Error('Invalid operators config');
    }
  }

  static validateOperation(operation: Operation) {
    const result = operationValidator.validate(operation, { abortEarly: true });

    if (result.error) {
      throw result.error;
    }
  }

  async runOperation(operation: Operation): Promise<any> {
    Engine.validateOperation(operation);

    const operator = this.operators[operation.operator];
    if (!operator) {
      throw new Error('Operator not found');
    }

    try {
      const input = await this.mountOperatorInput(operation.args);

      if (operator.argsValidator) {
        const { error } = operator.argsValidator.validate(input);

        if (error) {
          throw new Error(`Operation ${operator.name} was provided wrong format`);
        }
      }

      const result = await operator.handler(input);

      if (result && operation.onResult?.onTruthy) {
        return this.runOperation(operation.onResult?.onTruthy);
      }

      if (!result && operation.onResult?.onFalsy) {
        return this.runOperation(operation.onResult?.onFalsy);
      }

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async mountOperatorInput(args: any): Promise<Record<string, any>> {
    const argsType = typeof args;

    if (['boolean', 'number', 'string'].includes(argsType)) {
      return args;
    }

    const argsIsArray = isArray(args);
    if (argsIsArray) {
      const result = [];

      for (const arg of args) {
        const operationResult = await this.mountOperatorInput(arg);

        result.push(operationResult);
      }

      return result;
    }

    const argsIsObject = isPlainObject(args);
    // If it's not string, number, boolean, array nor object, is not an allowed type
    if (!argsIsObject) {
      throw new Error(`This type is not allowed ${args}`);
    }

    const isOperation = get(args, 'operator');
    if (isOperation) {
      return this.runOperation(args);
    }

    const result: Record<string, any> = {};

    const objectEntries = Object.entries(args);
    for (const [key, val] of objectEntries) {
      const value = await this.mountOperatorInput(val);

      set(result, [key], value);
    }

    return result;
  }
}
