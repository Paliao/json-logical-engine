import { andOperator, eqOperator, ifOperator, neqOperator, orOperator } from './logical';

export const logicalOperators = {
  if: ifOperator,

  eq: eqOperator,
  neq: neqOperator,

  and: andOperator,
  or: orOperator,
};
