import { defaultOperators } from './../operators/defaultOperators/index';
import { mockTrueGtOperation } from './operations/numeric/numericComparations.mock';
import { Engine } from '../engine';
import {
  mockInvalidEngineConfig,
  mockInvalidOnResultOperation,
  mockNestedOperationDepth1,
  mockNestedOperationDepth1WithInvalidInput,
  mockNestedOperationDepth1WithMixedArgs,
  mockOnResultOperation,
  mockOperationDataContext,
  mockOperationEnvContext,
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

  describe('Engine operations validator', () => {
    describe('Simple operation', () => {
      it('should be a valid operation config', () => {
        const validateOperations = () => Engine.validateOperation(mockTrueGtOperation);

        expect(validateOperations).not.toThrow();
      });

      it('should not be a valid operation config', () => {
        const validateOperations = () => Engine.validateOperation({ operator: '', args: {} });

        expect(validateOperations).toThrow();
      });
    });

    describe('onResult operation', () => {
      it('should be a valid operation config with a onTruthy operation', () => {
        const validateOperations = () => Engine.validateOperation(mockOnResultOperation);

        expect(validateOperations).not.toThrow();
      });

      it('should be a valid operation config with a onFalsy operation', () => {
        const validateOperations = () => Engine.validateOperation(mockOnResultOperation);

        expect(validateOperations).not.toThrow();
      });

      it('should not be a valid operation config within result', () => {
        const validateOperations = () => Engine.validateOperation(mockInvalidOnResultOperation);

        expect(validateOperations).toThrow();
      });
    });
  });
});

describe('Engine operators aux functions', () => {
  const engine = new Engine({}, {});

  it('Checks every default operation', () => {
    const defaultOperatorsKeys = Object.keys(defaultOperators);
    const engineOperationsKeys = engine.getOperatorList().map((op) => op.operator);

    expect(defaultOperatorsKeys).toEqual(engineOperationsKeys);
  });

  it('Checks the addition of an operation', () => {
    const engine2 = new Engine({}, {});

    const testOperator = {
      name: 'test',
      description: 'test',
      handler: () => {},
    };

    engine2.addOperators({
      testOperator,
    });

    const hasTestOperator = engine2.getOperatorList().some((op) => op.operator === 'testOperator');

    expect(hasTestOperator).toBeTruthy();
  });

  it('Checks the addition of an operation', () => {
    const engine2 = new Engine({}, {});

    const testOperator = {
      name: 'test',
      description: 'test',
      handler: () => {},
    };

    engine2.addOperators({
      testOperator,
    });

    const hasTestOperator = engine2.getOperatorList().some((op) => op.operator === 'testOperator');

    expect(hasTestOperator).toBeTruthy();
  });

  it('Checks the removal of an operation', () => {
    const engine2 = new Engine({}, {});

    const availableOperators = engine2.getOperatorList().map((op) => op.operator);
    engine2.removeOperators(availableOperators);

    expect(engine2.getOperatorList().length).toBe(0);
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

  describe('Using $ctx', () => {
    it('should be a valid nested operation using the previous result', async () => {
      const result = await engine.runOperation(mockOnResultOperation);

      expect(result).toBe(375);
    });

    it('should be a valid nested operation using the provided data to the operation', async () => {
      const result = await engine.runOperation(mockOperationDataContext, { number: 50 });

      expect(result).toBe(200);
    });

    it('should be a valid nested operation using the provided data to the operation', async () => {
      const engine2 = new Engine(
        {},
        {
          env: {
            number: 10,
          },
        },
      );
      const result = await engine2.runOperation(mockOperationEnvContext);

      expect(result).toBe(160);
    });
  });
});
