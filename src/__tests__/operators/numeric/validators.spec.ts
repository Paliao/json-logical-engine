import {
  twoNumbersListValidator,
  unlimittedNumbersListValidator,
} from '../../../operators/defaultOperators/numeric/validators';

describe('numeric operators validators', () => {
  it('should throw invalid input for twoNumbersListValidator', () => {
    const r1 = twoNumbersListValidator.validate('teste');
    const r2 = twoNumbersListValidator.validate(1);
    const r3 = twoNumbersListValidator.validate({});
    const r4 = twoNumbersListValidator.validate({ empty: true });
    const r5 = twoNumbersListValidator.validate({ numbers: [] });
    const r6 = twoNumbersListValidator.validate({ numbers: [1] });
    const r7 = twoNumbersListValidator.validate({ numbers: ['1', true] });

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
    expect(r3.error).toBeTruthy();
    expect(r4.error).toBeTruthy();
    expect(r5.error).toBeTruthy();
    expect(r6.error).toBeTruthy();
    expect(r7.error).toBeTruthy();
  });

  it('should be valid arguments input for twoNumbersListValidator', () => {
    const result = twoNumbersListValidator.validate({ numbers: [1, 2] });
    expect(result.error).toBeFalsy();
  });

  it('should throw invalid input for unlimittedNumbersListValidator', () => {
    const r1 = unlimittedNumbersListValidator.validate('teste');
    const r2 = unlimittedNumbersListValidator.validate(1);
    const r3 = unlimittedNumbersListValidator.validate({});
    const r4 = unlimittedNumbersListValidator.validate({ empty: true });
    const r5 = unlimittedNumbersListValidator.validate({ numbers: [] });
    const r6 = unlimittedNumbersListValidator.validate({ numbers: ['1', true] });

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
    expect(r3.error).toBeTruthy();
    expect(r4.error).toBeTruthy();
    expect(r5.error).toBeTruthy();
    expect(r6.error).toBeTruthy();
  });

  it('should be valid arguments input for unlimittedNumbersListValidator', () => {
    const result = unlimittedNumbersListValidator.validate({ numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
    expect(result.error).toBeFalsy();
  });
});
