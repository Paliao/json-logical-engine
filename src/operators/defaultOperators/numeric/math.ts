import { NumberComparationArgs, Operator } from 'types';

import { twoNumbersListValidator, unlimittedNumbersListValidator } from './validators';

export const addOperator: Operator<NumberComparationArgs> = {
  name: 'add',
  description: 'Add a list of numbers',
  argsValidator: unlimittedNumbersListValidator,
  handler: ({ numbers }) => {
    return numbers.reduce((prev, n) => prev + n, 0);
  },
};

export const subtractOperator: Operator<NumberComparationArgs> = {
  name: 'subtract',
  description: 'Subtract one number from another',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber - secondNumber;
  },
};

export const multiplyOperator: Operator<NumberComparationArgs> = {
  name: 'multiply',
  description: 'Multiplies a list of numbers',
  argsValidator: unlimittedNumbersListValidator,
  handler: ({ numbers }) => {
    return numbers.reduce((prev, n) => prev * n, 1);
  },
};

export const divideOperator: Operator<NumberComparationArgs> = {
  name: 'divide',
  description: 'Divides one number from another',
  argsValidator: twoNumbersListValidator,
  handler: ({ numbers }) => {
    const [firstNumber, secondNumber] = numbers;

    return firstNumber / (secondNumber || 1);
  },
};
