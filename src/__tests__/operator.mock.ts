import { Operator } from '../types';

export const mockValidOperator: Operator = {
  name: 'test',
  args: {
    empty: true,
  },
  operator: () => {},
  isAsync: true,
  enableLogging: true,
};

export const mockInvalidOperator = {
  name: '',
  args: true,
  operator: '',
};
