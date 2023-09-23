import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parse } from '../../methods/index.ts';
import { minLength } from '../../validations/index.ts';
import { string } from '../string/index.ts';
import { recursive } from './recursive.ts';

describe('recursive', () => {
  test('should pass only getter schema', () => {
    const schema = recursive(() => string([minLength(3)]));
    const input = 'hello';
    const output = parse(schema, input);
    expect(output).toBe(input);
    expect(() => parse(schema, 'he')).toThrowError();
    expect(() => parse(schema, 123n)).toThrowError();
    expect(() => parse(schema, null)).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });
});
