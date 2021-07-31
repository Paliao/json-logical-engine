import { logicalOperators } from './logical';
import { numericOperators } from './numeric';
import { utilsOperators } from './utils';

export const defaultOperators = {
  ...logicalOperators,
  ...numericOperators,
  ...utilsOperators,
};
