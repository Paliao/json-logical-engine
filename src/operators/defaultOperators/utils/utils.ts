import { NumberComparationArgs, Operator } from 'types';
import { returnsValidator } from './validators';

export const returnsOperator: Operator = {
  name: 'returns',
  description: 'Returns whatever is provided as argument',
  argsValidator: returnsValidator,
  handler: ({ returns }) => {
    return returns;
  },
};
