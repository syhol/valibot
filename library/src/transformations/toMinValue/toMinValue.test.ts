import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toMinValue } from './toMinValue.ts';

describe('toMinValue', () => {
  test('should transform to a minimum value', () => {
    const transform = toMinValue(10);
    expect(transform(9).output).toBe(10);
    expect(transform(10).output).toBe(10);
    expect(transform(11).output).toBe(11);
  });
});
