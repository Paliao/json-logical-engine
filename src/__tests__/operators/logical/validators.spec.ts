import {
  logicalCompararisonsValidator,
  logicalSingleConditionValidator,
  logicalUnlimitedConditionsValidator,
} from '../../../operators/defaultOperators/logical/validators';

describe('Logical operators validators', () => {
  it('should throw invalid input for logicalCompararisonsValidator', () => {
    const r1 = logicalCompararisonsValidator.validate('teste');
    const r2 = logicalCompararisonsValidator.validate(1);
    const r3 = logicalCompararisonsValidator.validate({});
    const r4 = logicalCompararisonsValidator.validate({ empty: true });
    const r5 = logicalCompararisonsValidator.validate({ comparison: [1] });
    const r6 = logicalCompararisonsValidator.validate({ comparison: [1, '', true] });
    const r7 = logicalCompararisonsValidator.validate({ comparisons: [] });

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
    expect(r3.error).toBeTruthy();
    expect(r4.error).toBeTruthy();
    expect(r5.error).toBeTruthy();
    expect(r6.error).toBeTruthy();
    expect(r7.error).toBeTruthy();
  });

  it('should be valid arguments input for logicalCompararisonsValidator', () => {
    const result = logicalCompararisonsValidator.validate({ comparison: [1, 1] });
    expect(result.error).toBeFalsy();
  });

  it('should throw invalid input for logicalSingleConditionValidator', () => {
    const r1 = logicalSingleConditionValidator.validate('teste');
    const r2 = logicalSingleConditionValidator.validate(1);
    const r3 = logicalSingleConditionValidator.validate({});
    const r4 = logicalSingleConditionValidator.validate({ empty: true });
    const r5 = logicalSingleConditionValidator.validate({ condition: [] });
    const r6 = logicalSingleConditionValidator.validate({ condition: ['1', true] });

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
    expect(r3.error).toBeTruthy();
    expect(r4.error).toBeTruthy();
    expect(r5.error).toBeTruthy();
    expect(r6.error).toBeTruthy();
  });

  it('should be valid arguments input for logicalSingleConditionValidator', () => {
    const r1 = logicalSingleConditionValidator.validate({ condition: [1] });
    const r2 = logicalSingleConditionValidator.validate({ condition: [true] });
    const r3 = logicalSingleConditionValidator.validate({ condition: [{}] });

    expect(r1.error).toBeFalsy();
    expect(r2.error).toBeFalsy();
    expect(r3.error).toBeFalsy();
  });

  it('should throw invalid input for logicalUnlimitedConditionsValidator', () => {
    const r1 = logicalUnlimitedConditionsValidator.validate('teste');
    const r2 = logicalUnlimitedConditionsValidator.validate(1);
    const r3 = logicalUnlimitedConditionsValidator.validate({});
    const r4 = logicalUnlimitedConditionsValidator.validate({ empty: true });
    const r5 = logicalUnlimitedConditionsValidator.validate({ conditions: [] });
    const r6 = logicalUnlimitedConditionsValidator.validate({ condition: ['1'] });
    const r7 = logicalUnlimitedConditionsValidator.validate({ condition: [true] });

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
    expect(r3.error).toBeTruthy();
    expect(r4.error).toBeTruthy();
    expect(r5.error).toBeTruthy();
    expect(r6.error).toBeTruthy();
    expect(r7.error).toBeTruthy();
  });

  it('should be valid arguments input for logicalUnlimitedConditionsValidator', () => {
    const r1 = logicalUnlimitedConditionsValidator.validate({ conditions: [1, 2] });
    const r2 = logicalUnlimitedConditionsValidator.validate({ conditions: [true, false] });
    const r3 = logicalUnlimitedConditionsValidator.validate({ conditions: [{}, []] });

    expect(r1.error).toBeFalsy();
    expect(r2.error).toBeFalsy();
    expect(r3.error).toBeFalsy();
  });
});
