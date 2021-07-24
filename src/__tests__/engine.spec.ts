import { Engine } from '../engine';
import { mockInvalidEngineConfig, mockValidEngineConfig } from './engine.mock';

import { mockValidOperator, mockInvalidOperator } from './operator.mock';

describe('Engine constructor', () => {
  it('should create a new engine', () => {
    const engine = new Engine({}, {});
    expect(engine).toBeDefined();
  });
});

describe('Engine validators', () => {
  describe('engineConfig validator', () => {
    it('should be a valid config', () => {
      const validateConfig = () => Engine.validateConfig(mockValidEngineConfig);

      expect(validateConfig).not.toThrow();
    });

    it('should not be a valid config', () => {
      const validateConfig = () => Engine.validateConfig(mockInvalidEngineConfig);

      expect(validateConfig).toThrow();
    });
  });

  it('should be a valid operators config', () => {
    const validateOperators = () =>
      Engine.validateOperators({
        test: mockValidOperator,
      });

    expect(validateOperators).not.toThrow();
  });

  it('should be a valid operators config', () => {
    const validateOperators = () =>
      Engine.validateOperators({
        test: mockValidOperator,
      });

    expect(validateOperators).not.toThrow();
  });

  it('should not be a valid operators config', () => {
    const validateOperators = () =>
      Engine.validateOperators({
        test: mockInvalidOperator,
      });

    expect(validateOperators).toThrow();
  });

  it('should not be a valid operators object', () => {
    const validateOperators = () => Engine.validateOperators(null);

    expect(validateOperators).toThrow();
  });
});
