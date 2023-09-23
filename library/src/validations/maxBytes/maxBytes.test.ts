import { describe, it as test } from 'test';
import { expect } from 'expect';
import { maxBytes } from './maxBytes.ts';

describe('maxBytes', () => {
  test('should pass only valid byte lengths', () => {
    const validate = maxBytes(3);

    const value1 = '';
    expect(validate(value1).output).toBe(value1);
    const value2 = 'abc';
    expect(validate(value2).output).toBe(value2);
    const value3 = 'あ'; // in UTF-8, 'あ' is 3 bytes
    expect(validate(value3).output).toBe(value3);

    expect(validate('1234').issues).toBeTruthy();
    expect(validate('あいう').issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value byte length is greater than "3"!';
    const validate = maxBytes(3, error);
    expect(validate('あいう').issues?.[0].message).toBe(error);
  });
});
