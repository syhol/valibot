import { describe, it as test } from 'test';
import { expect } from 'expect';
import { includes } from './includes.ts';

describe('includes', () => {
  test('should pass only included values', () => {
    const validate = includes('abc');
    const value1 = 'abc';
    expect(validate(value1).output).toBe(value1);
    const value2 = '123abc';
    expect(validate(value2).output).toBe(value2);
    const value3 = '123abc123';
    expect(validate(value3).output).toBe(value3);

    expect(validate('').issues).toBeTruthy();
    expect(validate('Abc').issues).toBeTruthy();
    expect(validate('123').issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value does not include "abc"!';
    const validate = includes('abc', error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});
