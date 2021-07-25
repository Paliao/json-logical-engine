import { GtOperatorArgs, Operator } from 'types';

import { numberComparationValidator } from './validators';

export const gtOperator: Operator<GtOperatorArgs> = {
  name: 'gt',
  description: 'Checks if the first argument is greater than the second one',
  argsValidator: numberComparationValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber > secondNumber;
  },
};

export const gteOperator: Operator<GtOperatorArgs> = {
  name: 'gte',
  description: 'Checks if the first argument is greater than OR equal to the second one',
  argsValidator: numberComparationValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber >= secondNumber;
  },
};
