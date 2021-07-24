import { defaultOperators } from './../operators/defaultOperators/index';
import Joi from 'joi';

import { engineOperatorValidator } from '../operators/validators';
import { EngineConfig, Operator } from 'types';

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
}
