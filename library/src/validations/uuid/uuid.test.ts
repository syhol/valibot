import { describe, it as test } from 'test';
import { expect } from 'expect';
import { uuid } from './uuid.ts';

describe('uuid', () => {
  test('should pass only UUIDs', () => {
    const validate = uuid();
    const value1 = 'f0563a22-202e-11ee-be56-0242ac120002';
    expect(validate(value1).output).toBe(value1);
    const value2 = '4d504a73-86da-4517-a09d-09622730146b';
    expect(validate(value2).output).toBe(value2);
    const value3 = 'ffefc5f8-5134-42f3-85df-7145d98f1a4e';
    expect(validate(value3).output).toBe(value3);
    const value4 = '165759e6-d815-4aac-9408-304999b15201';
    expect(validate(value4).output).toBe(value4);
    const value5 = '1ae102c2-202f-11ee-acec-2eb5a363657c';
    expect(validate(value5).output).toBe(value5);

    expect(validate('').issues).toBeTruthy();
    expect(
      validate('pae102c2-202f-11ee-acec-2eb5a363657c').issues
    ).toBeTruthy();
    expect(validate('ae102c2-202f-11ee-acec-2eb5a363657c').issues).toBeTruthy();
    expect(
      validate('1ae102c22-202f-11ee-acec-2eb5a363657c').issues
    ).toBeTruthy();
    expect(validate('1ae102c2-202-11ee-acec-2eb5a363657c').issues).toBeTruthy();
    expect(
      validate('1ae102c2-202f-11ee2-acec-2eb5a363657c').issues
    ).toBeTruthy();
    expect(
      validate('1ae102c2-202f-11ee-ac2ec-2eb5a363657c').issues
    ).toBeTruthy();
    expect(
      validate('1ae102c2-202f-11ee-ac2ec-eb5a363657c').issues
    ).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not an UUID!';
    const validate = uuid(error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});
