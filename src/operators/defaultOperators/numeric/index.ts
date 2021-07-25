import { GtOperatorArgs, Operator } from 'types';

import { gtValidator } from './validators';

export const gtOperator: Operator<GtOperatorArgs> = {
  name: 'gt',
  description: 'Checks if the first argument is greater than the second one',
  argsValidator: gtValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber > secondNumber;
  },
};
