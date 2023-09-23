import { describe, it as test } from 'test';
import { expect } from 'expect';
import { customAsync } from './customAsync.ts';

describe('customAsync', () => {
  test('should validate by custom function', async () => {
    const validate = customAsync<number>(async (input) => input > 0);
    expect((await validate(1)).output).toBe(1);
    expect((await validate(-1)).issues).toBeTruthy();
  });

  test('should return custom error message', async () => {
    const error = 'Value is not greater than 1!';
    const validate = customAsync<number>(async (input) => input > 0, error);
    expect((await validate(-1)).issues?.[0].message).toBe(error);
  });
});
