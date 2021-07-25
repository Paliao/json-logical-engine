import { Engine } from './../../engine/Engine';
import { mockFalseGtOperation, mockTrueGtOperation } from './numeric.mock';

describe('Default operations', () => {
  describe('gtOperator', () => {
    it('should be a true gtOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockTrueGtOperation);

      expect(result).toBeTruthy();
    });

    it('should be a false gtOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockFalseGtOperation);

      expect(result).toBeFalsy();
    });
  });
});
