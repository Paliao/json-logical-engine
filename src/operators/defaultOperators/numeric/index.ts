import { addOperator, subtractOperator, divideOperator, multiplyOperator } from './math';
import { gteOperator, gtOperator, ltOperator, lteOperator } from './numericComparations';

export const numericOperators = {
  gt: gtOperator,
  gte: gteOperator,
  lt: ltOperator,
  lte: lteOperator,

  add: addOperator,
  subtract: subtractOperator,
  divide: divideOperator,
  multiply: multiplyOperator,
};
