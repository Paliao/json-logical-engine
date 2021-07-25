import { EngineConfig } from '../types';

export const mockValidEngineConfig: EngineConfig = {
  enableLogging: true,
};

export const mockInvalidEngineConfig = {
  empty: true,
};

export const mockNestedOperationDepth1 = {
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

export const mockNestedOperationDepth1WithMixedArgs = {
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
