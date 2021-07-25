import { operationValidator } from './../operators/validators';
import { defaultOperators } from './../operators/defaultOperators/index';
import Joi from 'joi';

import { engineOperatorValidator } from '../operators/validators';
import { EngineConfig, Operation, Operator } from 'types';

import { defaultEngineConfig } from './index';
import { engineConfigValidator } from './vallidators';

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

  async runOperation(operation: Operation) {
    Engine.validateOperation(operation);

    const operator = this.operators[operation.operator];
    if (!operator) {
      throw new Error('Operator not found');
    }

    try {
      const input = this.mountOperatorInput(operation.args);

      if (operator.argsValidator) {
        const { error } = operator.argsValidator.validate(input);

        if (error) {
          throw new Error(`Operation ${operator.name} was provided wrong format`);
        }
      }

      const result = await operator.handler(input);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  mountOperatorInput(args: Operation['args']): Record<string, any> {
    return args;
  }
}
