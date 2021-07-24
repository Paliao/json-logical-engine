import { Operator } from '../types';

export const mockValidOperator: Operator = {
  name: 'test',
  operator: () => {},
  isAsync: true,
  enableLogging: true,
};

export const mockInvalidOperator = {
  name: '',
  operator: true,
};
