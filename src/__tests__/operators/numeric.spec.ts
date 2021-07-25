import { gtOperator } from '../../operators/defaultOperators/numeric';

describe('Default operators', () => {
  describe('Gt operator', () => {
    describe('Gt operator validator', () => {
      it('should invalid arguments input', () => {
        const r1 = gtOperator.argsValidator.validate('teste');
        const r2 = gtOperator.argsValidator.validate(1);
        const r3 = gtOperator.argsValidator.validate({});
        const r4 = gtOperator.argsValidator.validate({ empty: true });
        const r5 = gtOperator.argsValidator.validate({ numbers: [] });
        const r6 = gtOperator.argsValidator.validate({ numbers: [1] });
        const r7 = gtOperator.argsValidator.validate({ numbers: ['1', true] });

        expect(r1.error).toBeTruthy();
        expect(r2.error).toBeTruthy();
        expect(r3.error).toBeTruthy();
        expect(r4.error).toBeTruthy();
        expect(r5.error).toBeTruthy();
        expect(r6.error).toBeTruthy();
        expect(r7.error).toBeTruthy();
      });

      it('should be valid arguments input', () => {
        const result = gtOperator.argsValidator.validate({ numbers: [1, 2] });
        expect(result.error).toBeFalsy();
      });
    });
    it('should be a true gt operation', () => {
      const result = gtOperator.handler({ numbers: [2, 1] });

      expect(result).toBeTruthy();
    });

    it('should be a false gt operation', () => {
      const result = gtOperator.handler({ numbers: [1, 2] });

      expect(result).toBeFalsy();
    });
  });
});
