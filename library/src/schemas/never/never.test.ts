import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { never } from './never.ts';

describe('never', () => {
  test('should pass no value', () => {
    const schema = never();
    expect(() => parse(schema, null)).toThrowError();
    expect(() => parse(schema, undefined)).toThrowError();
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, 'test')).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });

  test('should throw custom error', () => {
    const error = 'Value is not never!';
    expect(() => parse(never(error), undefined)).toThrowError(error);
  });
});
