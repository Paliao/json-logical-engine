import { Engine } from '../../../engine/Engine';

import {
  mockValidAndOperation,
  mockValidEqOperation,
  mockValidIfOperation,
  mockValidNeqOperation,
  mockValidOrOperation,
} from './logical.mock';

const engine = new Engine({}, {});

describe('Logical operations', () => {
  it('should be a valid if operation', async () => {
    const result = await engine.runOperation(mockValidIfOperation);

    expect(result).toBe(true);
  });

  it('should be a valid eq operation', async () => {
    const result = await engine.runOperation(mockValidEqOperation);

    expect(result).toBe(true);
  });

  it('should be a valid neq operation', async () => {
    const result = await engine.runOperation(mockValidNeqOperation);

    expect(result).toBe(true);
  });

  it('should be a valid or operation', async () => {
    const result = await engine.runOperation(mockValidOrOperation);

    expect(result).toBe(true);
  });

  it('should be a valid and operation', async () => {
    const result = await engine.runOperation(mockValidAndOperation);

    expect(result).toBe(true);
  });
});
