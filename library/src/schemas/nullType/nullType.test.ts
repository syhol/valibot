import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { nullType } from './nullType.ts';

describe('nullType', () => {
  test('should pass only null', () => {
    const schema = nullType();
    expect(parse(schema, null)).toBeNull();
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, '123')).toThrowError();
    expect(() => parse(schema, false)).toThrowError();
    expect(() => parse(schema, undefined)).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });

  test('should throw custom error', () => {
    const error = 'Value is not null!';
    expect(() => parse(nullType(error), 123)).toThrowError(error);
  });
});
