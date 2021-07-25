import { Engine } from '../../../engine/Engine';
import {
  mockValidMultiplyOperation,
  mockValidAddOperation,
  mockValidSubtractOperation,
  mockDivideOperation,
} from './math.mock';

const engine = new Engine({}, {});

describe('Math operations', () => {
  it('should be a valid add operation', async () => {
    const result = await engine.runOperation(mockValidAddOperation);

    expect(result).toBe(30);
  });

  it('should be a valid subract operation', async () => {
    const result = await engine.runOperation(mockValidSubtractOperation);

    expect(result).toBe(1);
  });

  it('should be a valid multiply operation', async () => {
    const result = await engine.runOperation(mockValidMultiplyOperation);

    expect(result).toBe(8);
  });

  it('should be a valid divide operation', async () => {
    const result = await engine.runOperation(mockDivideOperation);

    expect(result).toBe(3);
  });
});
