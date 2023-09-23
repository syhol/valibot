import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { nan } from './nan.ts';

describe('nan', () => {
  test('should pass only NaN', () => {
    const schema = nan();
    const input = NaN;
    const output = parse(schema, input);
    expect(output).toBe(input);
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, '123')).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });

  test('should throw custom error', () => {
    const error = 'Value is not NaN!';
    expect(() => parse(nan(error), 123)).toThrowError(error);
  });
});
