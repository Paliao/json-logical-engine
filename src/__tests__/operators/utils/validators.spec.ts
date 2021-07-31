import { returnsValidator } from '../../../operators/defaultOperators/utils/validators';

describe('Utils operators validators', () => {
  it('should throw invalid input for returnsValidator', () => {
    const r1 = returnsValidator.validate(null);
    const r2 = returnsValidator.validate(undefined);

    expect(r1.error).toBeTruthy();
    expect(r2.error).toBeTruthy();
  });

  it('should throw invalid input for returnsValidator', () => {
    const r1 = returnsValidator.validate({ returns: {} });
    const r2 = returnsValidator.validate({ returns: 1 });
    const r3 = returnsValidator.validate({ returns: [1, 2] });
    const r4 = returnsValidator.validate({ returns: 'abc' });

    expect(r1.error).toBeFalsy();
    expect(r2.error).toBeFalsy();
    expect(r3.error).toBeFalsy();
    expect(r4.error).toBeFalsy();
  });
});
