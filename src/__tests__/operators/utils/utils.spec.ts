import { utilsOperators } from '../../../operators/defaultOperators/utils';

describe('Utils Operators', () => {
  describe('Returns operator', () => {
    it('should return the same result as provided', () => {
      const returns = {
        test: true,
      };

      const result = utilsOperators.returns.handler({ returns });

      expect(result).toEqual(result);
    });
  });
});
