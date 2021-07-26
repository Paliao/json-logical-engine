import { isEqual } from 'lodash';
import { Operator } from 'types';

import {
  logicalCompararisonsValidator,
  logicalSingleConditionValidator,
  logicalUnlimitedConditionsValidator,
} from './validators';

export const ifOperator: Operator = {
  name: 'if',
  description: 'Check if a condition is truthy',
  argsValidator: logicalSingleConditionValidator,
  handler: ({ condition }) => {
    const [c] = condition;

    return !!c;
  },
};

export const eqOperator: Operator = {
  name: 'eq',
  description: 'Checks if the comparators are deep equal',
  argsValidator: logicalCompararisonsValidator,
  handler: ({ comparison }) => {
    const [c1, c2] = comparison;

    return isEqual(c1, c2);
  },
};

export const neqOperator: Operator = {
  name: 'neq',
  description: 'Checks if the comparators are not deep equal',
  argsValidator: logicalCompararisonsValidator,
  handler: ({ comparison }) => {
    const [c1, c2] = comparison;

    return !isEqual(c1, c2);
  },
};

export const orOperator: Operator = {
  name: 'or',
  description: 'Checks if any of the conditions are truthy',
  argsValidator: logicalUnlimitedConditionsValidator,
  handler: ({ conditions }) => {
    return conditions.some((condition: any) => !!condition);
  },
};

export const andOperator: Operator = {
  name: 'and',
  description: 'Checks if any of all the provided conditions are truthy',
  argsValidator: logicalUnlimitedConditionsValidator,
  handler: ({ conditions }) => {
    return conditions.every((condition: any) => !!condition);
  },
};
