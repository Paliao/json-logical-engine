import { engineOperatorValidator } from '../operators';

import { mockValidOperator, mockInvalidOperator } from './operator.mock';

describe('Operator validator', () => {
  it('should be a valid operator', () => {
    const result = engineOperatorValidator.validate(mockValidOperator);
    expect(result.error).not.toBeTruthy();
  });

  it('should not be a valid operator', () => {
    const result = engineOperatorValidator.validate(mockInvalidOperator);
    expect(result.error).toBeTruthy();
  });
});
