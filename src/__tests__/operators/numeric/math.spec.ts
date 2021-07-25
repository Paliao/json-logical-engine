import { numericOperators } from '../../../operators/defaultOperators/numeric';

describe('Math Operators', () => {
  describe('add Operator', () => {
    it('should be a true result', () => {
      const r1 = numericOperators.add.handler({ numbers: [1] });
      const r2 = numericOperators.add.handler({ numbers: [0] });
      const r3 = numericOperators.add.handler({ numbers: [-1, -2] });
      const r4 = numericOperators.add.handler({ numbers: [-2, 2, 0] });
      const r5 = numericOperators.add.handler({ numbers: [1, 2, 3, 4] });

      expect(r1).toBe(1);
      expect(r2).toBe(0);
      expect(r3).toBe(-3);
      expect(r4).toBe(0);
      expect(r5).toBe(10);
    });
  });

  describe('subtract Operator', () => {
    it('should be a true result', () => {
      const r1 = numericOperators.subtract.handler({ numbers: [2, 1] });
      const r2 = numericOperators.subtract.handler({ numbers: [0, 4] });
      const r3 = numericOperators.subtract.handler({ numbers: [1, -2] });

      expect(r1).toBe(1);
      expect(r2).toBe(-4);
      expect(r3).toBe(3);
    });
  });

  describe('multiply Operator', () => {
    it('should be a true result', () => {
      const r1 = numericOperators.multiply.handler({ numbers: [1, 1] });
      const r2 = numericOperators.multiply.handler({ numbers: [10, 10, 0] });
      const r3 = numericOperators.multiply.handler({ numbers: [10, -2] });

      expect(r1).toBe(1);
      expect(r2).toBe(0);
      expect(r3).toBe(-20);
    });
  });

  describe('divide Operator', () => {
    it('should be a true result', () => {
      const r1 = numericOperators.divide.handler({ numbers: [1, 1] });
      const r2 = numericOperators.divide.handler({ numbers: [10, 0] });
      const r3 = numericOperators.divide.handler({ numbers: [10, -2] });

      expect(r1).toBe(1);
      expect(r2).toBe(10);
      expect(r3).toBe(-5);
    });
  });
});
