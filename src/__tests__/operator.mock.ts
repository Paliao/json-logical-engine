import { Operator } from '../types';

export const mockValidOperator: Operator = {
  name: 'test',
  handler: () => {},
  isAsync: true,
  enableLogging: true,
};

export const mockInvalidOperator = {
  name: '',
  operator: true,
};
