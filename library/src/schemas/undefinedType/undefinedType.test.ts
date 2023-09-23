import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { undefinedType } from './undefinedType.ts';

describe('undefined', () => {
  test('should pass only undefined', () => {
    const schema = undefinedType();
    expect(parse(schema, undefined)).toBeUndefined();
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, 'test')).toThrowError();
    expect(() => parse(schema, false)).toThrowError();
    expect(() => parse(schema, null)).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });

  test('should throw custom error', () => {
    const error = 'Value is not undefined!';
    expect(() => parse(undefinedType(error), 123)).toThrowError(error);
  });
});
