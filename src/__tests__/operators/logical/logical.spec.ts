import { logicalOperators } from '../../../operators/defaultOperators/logical';

describe('Logical Operators', () => {
  describe('if Operator', () => {
    it('should be true as the result', () => {
      const r1 = logicalOperators.if.handler({ condition: [1] });
      const r2 = logicalOperators.if.handler({ condition: [true] });
      const r3 = logicalOperators.if.handler({ condition: [{}] });
      const r4 = logicalOperators.if.handler({ condition: ['test'] });

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(r3).toBe(true);
      expect(r4).toBe(true);
    });

    it('should be false as the result', () => {
      const r1 = logicalOperators.if.handler({ condition: [0] });
      const r2 = logicalOperators.if.handler({ condition: [''] });
      const r3 = logicalOperators.if.handler({ condition: [false] });
      const r4 = logicalOperators.if.handler({ condition: [null] });
      const r5 = logicalOperators.if.handler({ condition: [undefined] });

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(r4).toBe(false);
      expect(r5).toBe(false);
    });
  });

  describe('eq Operator', () => {
    it('should be true as the result', () => {
      const r1 = logicalOperators.eq.handler({ comparison: [1, 1] });
      const r2 = logicalOperators.eq.handler({ comparison: [true, true] });
      const r3 = logicalOperators.eq.handler({ comparison: [false, false] });
      const r4 = logicalOperators.eq.handler({ comparison: ['test', 'test'] });
      const r5 = logicalOperators.eq.handler({ comparison: [{ a: { b: { c: true } } }, { a: { b: { c: true } } }] });
      const r6 = logicalOperators.eq.handler({ comparison: [{ a: [1, 2] }, { a: [1, 2] }] });

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(r3).toBe(true);
      expect(r4).toBe(true);
      expect(r5).toBe(true);
      expect(r6).toBe(true);
    });

    it('should be false as the result', () => {
      const r1 = logicalOperators.eq.handler({ comparison: [0, 1] });
      const r2 = logicalOperators.eq.handler({ comparison: ['', 'test'] });
      const r3 = logicalOperators.eq.handler({ comparison: [false, true] });
      const r4 = logicalOperators.eq.handler({ comparison: [null, undefined] });
      const r5 = logicalOperators.eq.handler({ comparison: [undefined, 0] });
      const r6 = logicalOperators.eq.handler({ comparison: [{ a: [1, 2] }, { a: [2, 1] }] });

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(r4).toBe(false);
      expect(r5).toBe(false);
      expect(r6).toBe(false);
    });
  });

  // Repeating cause they are just the opposite
  describe('neq Operator', () => {
    it('should be false as the result', () => {
      const r1 = logicalOperators.neq.handler({ comparison: [1, 1] });
      const r2 = logicalOperators.neq.handler({ comparison: [true, true] });
      const r3 = logicalOperators.neq.handler({ comparison: [false, false] });
      const r4 = logicalOperators.neq.handler({ comparison: ['test', 'test'] });
      const r5 = logicalOperators.neq.handler({ comparison: [{ a: { b: { c: true } } }, { a: { b: { c: true } } }] });
      const r6 = logicalOperators.neq.handler({ comparison: [{ a: [1, 2] }, { a: [1, 2] }] });

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(r4).toBe(false);
      expect(r5).toBe(false);
      expect(r6).toBe(false);
    });

    it('should be true as the result', () => {
      const r1 = logicalOperators.neq.handler({ comparison: [0, 1] });
      const r2 = logicalOperators.neq.handler({ comparison: ['', 'test'] });
      const r3 = logicalOperators.neq.handler({ comparison: [false, true] });
      const r4 = logicalOperators.neq.handler({ comparison: [null, undefined] });
      const r5 = logicalOperators.neq.handler({ comparison: [undefined, 0] });
      const r6 = logicalOperators.neq.handler({ comparison: [{ a: [1, 2] }, { a: [2, 1] }] });

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(r3).toBe(true);
      expect(r4).toBe(true);
      expect(r5).toBe(true);
      expect(r6).toBe(true);
    });
  });

  describe('and Operator', () => {
    it('should be true as the result', () => {
      const r1 = logicalOperators.and.handler({ conditions: [1, true, 'test'] });
      const r2 = logicalOperators.and.handler({ conditions: [10, true] });
      const r3 = logicalOperators.and.handler({ conditions: [{}, []] });
      const r4 = logicalOperators.and.handler({ conditions: ['test', 'test', 10] });

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(r3).toBe(true);
      expect(r4).toBe(true);
    });

    it('should be false as the result', () => {
      const r1 = logicalOperators.and.handler({ conditions: [0, 1] });
      const r2 = logicalOperators.and.handler({ conditions: ['', 'test'] });
      const r3 = logicalOperators.and.handler({ conditions: [false, true] });
      const r4 = logicalOperators.and.handler({ conditions: [null, undefined] });
      const r5 = logicalOperators.and.handler({ conditions: [undefined, 0] });
      const r6 = logicalOperators.and.handler({ conditions: [true, ''] });

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(r4).toBe(false);
      expect(r5).toBe(false);
      expect(r6).toBe(false);
    });
  });
  describe('or Operator', () => {
    it('should be true as the result', () => {
      const r1 = logicalOperators.or.handler({ conditions: [1, false, ''] });
      const r2 = logicalOperators.or.handler({ conditions: [0, true] });
      const r3 = logicalOperators.or.handler({ conditions: [{}, [], 0] });
      const r4 = logicalOperators.or.handler({ conditions: ['', false, null, 1] });

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(r3).toBe(true);
      expect(r4).toBe(true);
    });

    it('should be false as the result', () => {
      const r1 = logicalOperators.or.handler({ conditions: [0, 0] });
      const r2 = logicalOperators.or.handler({ conditions: ['', false] });
      const r3 = logicalOperators.or.handler({ conditions: [false, null] });
      const r4 = logicalOperators.or.handler({ conditions: [null, undefined] });
      const r5 = logicalOperators.or.handler({ conditions: [undefined, 0] });
      const r6 = logicalOperators.or.handler({ conditions: [0, null, undefined, ''] });

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(r4).toBe(false);
      expect(r5).toBe(false);
      expect(r6).toBe(false);
    });
  });
});
