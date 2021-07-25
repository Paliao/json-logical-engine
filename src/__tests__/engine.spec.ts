import { mockTrueGtOperation } from './operations/numericComparations.mock';
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

  describe('engine operators validator', () => {
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

  describe('engine operations validator', () => {
    it('should be a valid operation config', () => {
      const validateOperators = () => Engine.validateOperation(mockTrueGtOperation);

      expect(validateOperators).not.toThrow();
    });

    it('should not be a valid operation config', () => {
      const validateOperators = () => Engine.validateOperation({ operator: '', args: {} });

      expect(validateOperators).toThrow();
    });
  });
});

describe('Engine run operation', () => {
  it('should throw operation not found', async () => {
    const engine = new Engine({}, {});

    const result = await engine.runOperation({ operator: 'notFound', args: {} }).catch((e) => e);

    expect(result).toBeInstanceOf(Error);
  });

  it('should throw wrong format input', async () => {
    const engine = new Engine({}, {});

    const result = await engine.runOperation({ operator: 'gt', args: { numbers: [] } }).catch((e) => e);

    expect(result).toBeInstanceOf(Error);
  });
});
