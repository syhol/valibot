import { describe, it as test } from 'test';
import { expect } from 'expect';
import { ulid } from './ulid.ts';

describe('ulid', () => {
  test('should pass only ULIDs', () => {
    const validate = ulid();

    const value1 = '01H9YWG755E7ZPXKPE57GQWHCY';
    expect(validate(value1).output).toBe(value1);
    const value2 = '01H9YWGTGVJA06FZZCRPMHAMWH';
    expect(validate(value2).output).toBe(value2);
    const value3 = '01H9YWH3GF0S3SRJ952RN0TGTX';
    expect(validate(value3).output).toBe(value3);
    const value4 = '01H9YWHHJS6DJ39WMVMT64CXTB';
    expect(validate(value4).output).toBe(value4);
    const value5 = '01H9YWHSQV4ZC0WM0YKNJ14EG0';
    expect(validate(value5).output).toBe(value5);
    const value6 = value5.toLowerCase();
    expect(validate(value6).output).toBe(value6);

    expect(validate('').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHC').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHCYA').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHCI').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHCL').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHCO').issues).toBeTruthy();
    expect(validate('01H9YWG755E7ZPXKPE57GQWHCU').issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not an ULID!';
    const validate = ulid(error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});
