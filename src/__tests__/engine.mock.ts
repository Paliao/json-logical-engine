import { EngineConfig, Operation } from '../types';

export const mockValidEngineConfig: EngineConfig = {
  enableLogging: true,
};

export const mockInvalidEngineConfig = {
  empty: true,
};

export const mockNestedOperationDepth1: Operation = {
  operator: 'gt',
  args: {
    numbers: [
      {
        operator: 'add',
        args: {
          numbers: [25, 25, 25],
        },
      },
      {
        operator: 'multiply',
        args: {
          numbers: [25, 4],
        },
      },
    ],
  },
};

export const mockNestedOperationDepth1WithInvalidInput = {
  operator: 'gt',
  args: {
    numbers: [
      {
        operator: 'add',
        args: {
          numbers: [25, 25, 25],
        },
      },
      {
        operator: 'subtract',
        args: {
          numbers: [150, 50, 20], // subtract should throw an error, cause it only uses 2 numbers
        },
      },
    ],
  },
};

export const mockNestedOperationDepth1WithMixedArgs: Operation = {
  operator: 'gte',
  args: {
    numbers: [
      {
        operator: 'add',
        args: {
          numbers: [25, 25, 25],
        },
      },
      75,
    ],
  },
};

export const mockInvalidOnResultOperation = {
  operator: 'gt',
  args: {
    numbers: [10, 75],
  },
  // Result 275
  onResult: {
    onFalsy: {
      empty: true,
    },
  },
};

export const mockOnResultOperation: Operation = {
  operator: 'add',
  args: {
    numbers: [
      {
        operator: 'add',
        args: {
          numbers: [100, 50, 50],
        },
      },
      75,
    ],
  },
  onResult: {
    onTruthy: {
      operator: 'add',
      args: {
        numbers: ['$ctx.prev.0.result', 100],
      },
      onResult: {
        onTruthy: {
          operator: 'lt',
          args: {
            numbers: ['$ctx.prev.1.result', '$ctx.prev.0.result'],
          },
        },
      },
    },
  },
};

export const mockOperationDataContext: Operation = {
  operator: 'add',
  args: {
    numbers: [100, 50, '$ctx.data.number'],
  },
};

export const mockOperationEnvContext: Operation = {
  operator: 'add',
  args: {
    numbers: [100, 50, '$ctx.env.number'],
  },
};

export const mockStringInterpolation: Operation = {
  operator: 'eq',
  args: {
    comparison: ['/test/123', '/test/$ctx.data.number'],
  },
};
