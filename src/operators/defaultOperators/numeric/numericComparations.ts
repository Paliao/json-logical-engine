import { NumberComparationArgs, Operator } from 'types';

import { numberComparationValidator } from './validators';

export const gtOperator: Operator<NumberComparationArgs> = {
  name: 'gt',
  description: 'Checks if the first argument is greater than the second one',
  argsValidator: numberComparationValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber > secondNumber;
  },
};

export const gteOperator: Operator<NumberComparationArgs> = {
  name: 'gte',
  description: 'Checks if the first argument is greater than OR equal to the second one',
  argsValidator: numberComparationValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber >= secondNumber;
  },
};
