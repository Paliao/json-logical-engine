import { NumberComparationArgs, Operator } from 'types';

import { twoNumbersListValidator } from './validators';

export const gtOperator: Operator<NumberComparationArgs> = {
  name: 'gt',
  description: 'Checks if the first argument is greater than the second one',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber > secondNumber;
  },
};

export const gteOperator: Operator<NumberComparationArgs> = {
  name: 'gte',
  description: 'Checks if the first argument is greater than OR equal to the second one',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber >= secondNumber;
  },
};

export const ltOperator: Operator<NumberComparationArgs> = {
  name: 'lt',
  description: 'Checks if the first argument is less than the second one',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber < secondNumber;
  },
};

export const lteOperator: Operator<NumberComparationArgs> = {
  name: 'lte',
  description: 'Checks if the first argument is less than OR equal to the second one',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber <= secondNumber;
  },
};
