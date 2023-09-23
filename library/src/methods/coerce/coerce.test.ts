import { describe, it as test } from 'test';
import { expect } from 'expect';
import { date, number, string } from '../../schemas/index.ts';
import { parse } from '../parse/index.ts';
import { coerce } from './coerce.ts';

describe('coerce', () => {
  test('should coerce number to string', () => {
    const output = parse(coerce(string(), String), 5);
    expect(output).toBe('5');
  });

  test('should coerce string to number', () => {
    const output = parse(coerce(number(), Number), '5');
    expect(output).toBe(5);
  });

  test('should coerce number to date', () => {
    const time = 1688902224413;
    const output = parse(
      coerce(date(), (input) => new Date(input as any)),
      time
    );
    expect(output).toBeInstanceOf(Date);
    expect(output.getTime()).toBe(time);
  });
});
