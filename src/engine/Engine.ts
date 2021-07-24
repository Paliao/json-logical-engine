import { EngineConfig, Operation, Operator } from 'types';

import { defaultEngineConfig } from './index';
import { engineConfigValidator } from './vallidators';

export class Engine {
  config: EngineConfig;
  operators: Record<string, Operator>;

  constructor(operators: Record<string, Operator>, config?: EngineConfig) {
    this.validateOperations();

    console.log(Engine.validateConfig(config));

    this.operators = operators;
    this.config = { ...defaultEngineConfig, ...config };
  }

  static validateConfig(config?: EngineConfig) {
    return engineConfigValidator.validate(config);
  }

  private validateOperations() {}
}
