import { describe, it as test } from 'test';
import { expect } from 'expect';
import { length } from './length.ts';

describe('length', () => {
  test('should pass only valid lengths', () => {
    const validate = length(3);
    const value1 = '123';
    expect(validate(value1).output).toBe(value1);
    const value2 = [1, 2, 3];
    expect(validate(value2).output).toBe(value2);

    expect(validate('').issues).toBeTruthy();
    expect(validate('12').issues).toBeTruthy();
    expect(validate('1234').issues).toBeTruthy();
    expect(validate([1, 2]).issues).toBeTruthy();
    expect(validate([1, 2, 3, 4]).issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value length is not "10"!';
    const validate = length(10, error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});
