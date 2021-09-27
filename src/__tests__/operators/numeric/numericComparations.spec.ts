import { numericOperators } from '../../../operators/defaultOperators/numeric';

describe('NumericComparations operators', () => {
  describe('gt Operator', () => {
    it('should be a false result', () => {
      const r1 = numericOperators.gt.handler({ numbers: [1, 2] });
      const r2 = numericOperators.gt.handler({ numbers: [2, 2] });
      const r3 = numericOperators.gt.handler({ numbers: [0, 0] });
      const r4 = numericOperators.gt.handler({ numbers: [0, 1] });
      const r5 = numericOperators.gt.handler({ numbers: [-1, 0] });
      const r6 = numericOperators.gt.handler({ numbers: [-2, -1] });

      expect(r1).toBeFalsy();
      expect(r2).toBeFalsy();
      expect(r3).toBeFalsy();
      expect(r4).toBeFalsy();
      expect(r5).toBeFalsy();
      expect(r6).toBeFalsy();
    });

    it('should be a true result', () => {
      const r1 = numericOperators.gt.handler({ numbers: [2, 1] });
      const r2 = numericOperators.gt.handler({ numbers: [1, 0] });
      const r3 = numericOperators.gt.handler({ numbers: [-1, -2] });

      expect(r1).toBeTruthy();
      expect(r2).toBeTruthy();
      expect(r3).toBeTruthy();
    });
  });

  describe('gte Operator', () => {
    it('should be a false result', () => {
      const r1 = numericOperators.gte.handler({ numbers: [1, 2] });
      const r2 = numericOperators.gte.handler({ numbers: [-1, 1] });
      const r3 = numericOperators.gte.handler({ numbers: [0, 1] });
      const r4 = numericOperators.gte.handler({ numbers: [-1, 0] });
      const r5 = numericOperators.gte.handler({ numbers: [-2, -1] });

      expect(r1).toBeFalsy();
      expect(r2).toBeFalsy();
      expect(r3).toBeFalsy();
      expect(r4).toBeFalsy();
      expect(r5).toBeFalsy();
    });

    it('should be a true result', () => {
      const r1 = numericOperators.gte.handler({ numbers: [2, 1] });
      const r2 = numericOperators.gte.handler({ numbers: [1, 1] });
      const r3 = numericOperators.gte.handler({ numbers: [0, 0] });
      const r4 = numericOperators.gte.handler({ numbers: [0, -1] });
      const r5 = numericOperators.gte.handler({ numbers: [-1, -2] });

      expect(r1).toBeTruthy();
      expect(r2).toBeTruthy();
      expect(r3).toBeTruthy();
      expect(r4).toBeTruthy();
      expect(r5).toBeTruthy();
    });
  });

  describe('lt Operator', () => {
    it('should be a false result', () => {
      const r1 = numericOperators.lt.handler({ numbers: [2, 1] });
      const r2 = numericOperators.lt.handler({ numbers: [2, 2] });
      const r3 = numericOperators.lt.handler({ numbers: [0, 0] });
      const r4 = numericOperators.lt.handler({ numbers: [1, 0] });
      const r5 = numericOperators.lt.handler({ numbers: [0, -1] });
      const r6 = numericOperators.lt.handler({ numbers: [-1, -2] });

      expect(r1).toBeFalsy();
      expect(r2).toBeFalsy();
      expect(r3).toBeFalsy();
      expect(r4).toBeFalsy();
      expect(r5).toBeFalsy();
      expect(r6).toBeFalsy();
    });

    it('should be a true result', () => {
      const r1 = numericOperators.lt.handler({ numbers: [1, 2] });
      const r2 = numericOperators.lt.handler({ numbers: [0, 1] });
      const r3 = numericOperators.lt.handler({ numbers: [-2, -1] });

      expect(r1).toBeTruthy();
      expect(r2).toBeTruthy();
      expect(r3).toBeTruthy();
    });
  });

  describe('lte Operator', () => {
    it('should be a false result', () => {
      const r1 = numericOperators.lte.handler({ numbers: [2, 1] });
      const r2 = numericOperators.lte.handler({ numbers: [1, -1] });
      const r3 = numericOperators.lte.handler({ numbers: [1, 0] });
      const r4 = numericOperators.lte.handler({ numbers: [0, -1] });
      const r5 = numericOperators.lte.handler({ numbers: [-1, -2] });

      expect(r1).toBeFalsy();
      expect(r2).toBeFalsy();
      expect(r3).toBeFalsy();
      expect(r4).toBeFalsy();
      expect(r5).toBeFalsy();
    });

    it('should be a true result', () => {
      const r1 = numericOperators.lte.handler({ numbers: [1, 2] });
      const r2 = numericOperators.lte.handler({ numbers: [1, 1] });
      const r3 = numericOperators.lte.handler({ numbers: [0, 0] });
      const r4 = numericOperators.lte.handler({ numbers: [-1, 0] });
      const r5 = numericOperators.lte.handler({ numbers: [-2, -1] });

      expect(r1).toBeTruthy();
      expect(r2).toBeTruthy();
      expect(r3).toBeTruthy();
      expect(r4).toBeTruthy();
      expect(r5).toBeTruthy();
    });
  });
});
