import { Operator } from '../types';

export const mockValidOperator: Operator = {
  name: 'test',
  handler: () => {},
  enableLogging: true,
};

export const mockInvalidOperator = {
  name: '',
  operator: true,
};
