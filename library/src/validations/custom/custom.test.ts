import { describe, it as test } from 'test';
import { expect } from 'expect';
import { custom } from './custom.ts';

describe('custom', () => {
  test('should validate by custom function', () => {
    const validate = custom<number>((input) => input > 0);
    expect(validate(1).output).toBe(1);
    expect(validate(-1).issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not greater than 1!';
    const validate = custom<number>((input) => input > 0, error);
    expect(validate(-1).issues?.[0].message).toBe(error);
  });
});
