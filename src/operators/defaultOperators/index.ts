import { logicalOperators } from './logical';
import { numericOperators } from './numeric';

export const defaultOperators = {
  ...logicalOperators,
  ...numericOperators,
};
