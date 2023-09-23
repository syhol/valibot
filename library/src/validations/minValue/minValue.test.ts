import { describe, it as test } from 'test';
import { expect } from 'expect';
import { minValue } from './minValue.ts';

describe('minValue', () => {
  test('should pass only valid values', () => {
    const validate1 = minValue('2023');
    expect(validate1('2023').output).toBe('2023');
    expect(validate1('2023-01-01').output).toBe('2023-01-01');
    expect(validate1('ABCD').output).toBe('ABCD');
    expect(validate1('').issues).toBeTruthy();
    expect(validate1('123').issues).toBeTruthy();
    expect(validate1('2022').issues).toBeTruthy();
    expect(validate1('2022-01-01').issues).toBeTruthy();

    const validate2 = minValue(3);
    expect(validate2(3).output).toBe(3);
    expect(validate2(12345).output).toBe(12345);
    expect(validate2(-123).issues).toBeTruthy();
    expect(validate2(0).issues).toBeTruthy();
    expect(validate2(2).issues).toBeTruthy();

    const validate3 = minValue(3n);
    expect(validate3(3n).output).toBe(3n);
    expect(validate3(12345n).output).toBe(12345n);
    expect(validate3(-123n).issues).toBeTruthy();
    expect(validate3(0n).issues).toBeTruthy();
    expect(validate3(2n).issues).toBeTruthy();

    const validate4 = minValue(new Date(Date.now() - 60000));
    const date1 = new Date();
    expect(validate4(date1).output).toBe(date1);
    const date2 = new Date(Date.now() + 10000);
    expect(validate4(date2).output).toBe(date2);
    const date3 = new Date(Date.now() - 10000);
    expect(validate4(date3).output).toBe(date3);
    expect(validate4(new Date(Date.now() - 120000)).issues).toBeTruthy();
    expect(validate4(new Date(Date.now() - 3600000)).issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value value is less than "3"!';
    const validate = minValue(3, error);
    expect(validate(1).issues?.[0].message).toBe(error);
  });
});
