import { Engine } from '../../engine/Engine';
import {
  mockFalseGtOperation,
  mockTrueGtOperation,
  mockTrueGteOperation,
  mockFalseGteOperation,
} from './numericComparations.mock';

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

  describe('gteOperator', () => {
    it('should be a true gteOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockTrueGteOperation);

      expect(result).toBeTruthy();
    });

    it('should be a false gteOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockFalseGteOperation);

      expect(result).toBeFalsy();
    });
  });

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

  describe('gteOperator', () => {
    it('should be a true gteOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockTrueGteOperation);

      expect(result).toBeTruthy();
    });

    it('should be a false gteOperation', async () => {
      const engine = new Engine({}, {});
      const result = await engine.runOperation(mockFalseGteOperation);

      expect(result).toBeFalsy();
    });
  });
});
