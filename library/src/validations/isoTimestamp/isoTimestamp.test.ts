import { describe, it as test } from 'test';
import { expect } from 'expect';
import { isoTimestamp } from './isoTimestamp.ts';

describe('isoTimestamp', () => {
  test('should pass only ISO timestamps', () => {
    const validate = isoTimestamp();
    const value1 = '2023-07-11T17:26:27.243Z';
    expect(validate(value1).output).toBe(value1);
    const value2 = '0000-01-01T00:00:00.000Z';
    expect(validate(value2).output).toBe(value2);
    const value3 = '9999-12-31T23:59:59.999Z';
    expect(validate(value3).output).toBe(value3);

    expect(validate('').issues).toBeTruthy();
    expect(validate('2023-07-11T17:26:27.243').issues).toBeTruthy();
    expect(validate('2023-07-1117:26:27.243Z').issues).toBeTruthy();
    expect(validate('0000-00-00T00:00:00.000Z').issues).toBeTruthy();
    expect(validate('9999-12-31T24:00:00.000').issues).toBeTruthy();
    expect(validate('10000-01-01T01:00:00.000Z').issues).toBeTruthy();
    expect(validate('0000-13-01T01:00:00.000Z').issues).toBeTruthy();
    expect(validate('0000-01-32T01:00:00.000Z').issues).toBeTruthy();
    expect(validate('0000-01-01T24:00:00.000Z').issues).toBeTruthy();
    expect(validate('0000-01-01T01:60:00.000Z').issues).toBeTruthy();
    expect(validate('0000-01-01T01:00:60.000Z').issues).toBeTruthy();
    // FIXME: expect(validate('2023-06-31T00:00:00.000Z').issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not an ISO timestamp!';
    const validate = isoTimestamp(error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});
