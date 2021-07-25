import { mockTrueGtOperation } from './operations/numeric/numericComparations.mock';
import { Engine } from '../engine';
import {
  mockInvalidEngineConfig,
  mockNestedOperationDepth1,
  mockNestedOperationDepth1WithInvalidInput,
  mockNestedOperationDepth1WithMixedArgs,
  mockValidEngineConfig,
} from './engine.mock';

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
      const validateOperations = () => Engine.validateOperation(mockTrueGtOperation);

      expect(validateOperations).not.toThrow();
    });

    it('should not be a valid operation config', () => {
      const validateOperations = () => Engine.validateOperation({ operator: '', args: {} });

      expect(validateOperations).toThrow();
    });
  });
});

describe('Engine run simple operation', () => {
  const engine = new Engine({}, {});

  it('should throw operation not found', async () => {
    const result = await engine.runOperation({ operator: 'notFound', args: {} }).catch((e) => e);

    expect(result).toBeInstanceOf(Error);
  });

  it('should throw wrong format input', async () => {
    const result = await engine.runOperation({ operator: 'gt', args: { numbers: [] } }).catch((e) => e);

    expect(result).toBeInstanceOf(Error);
  });
});

describe('Run nested operation', () => {
  const engine = new Engine({}, {});
  describe('Depth 1', () => {
    it('should be a valid nested operation with a false result', async () => {
      const result = await engine.runOperation(mockNestedOperationDepth1);

      expect(result).toBe(false);
    });

    it('should be a valid nested operation with mixed args and a true result', async () => {
      const result = await engine.runOperation(mockNestedOperationDepth1WithMixedArgs);

      expect(result).toBe(true);
    });

    it('should throw an invalid input error', async () => {
      const result = await engine.runOperation(mockNestedOperationDepth1WithInvalidInput).catch((e) => e);
      expect(result).toBeInstanceOf(Error);
    });
  });
});
