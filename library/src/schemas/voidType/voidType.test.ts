import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { voidType } from './voidType.ts';

describe('void', () => {
  test('should pass only void', () => {
    const schema = voidType();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(parse(schema, (() => {})())).toBeUndefined();
    expect(parse(schema, undefined)).toBeUndefined();
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, 'test')).toThrowError();
    expect(() => parse(schema, false)).toThrowError();
    expect(() => parse(schema, null)).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });

  test('should throw custom error', () => {
    const error = 'Value is not void!';
    expect(() => parse(voidType(error), 123)).toThrowError(error);
  });
});
