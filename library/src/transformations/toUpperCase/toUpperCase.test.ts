import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toUpperCase } from './toUpperCase.ts';

describe('toUpperCase', () => {
  test('should transform to upper case', () => {
    const transform = toUpperCase();
    expect(transform('TeSt').output).toBe('TEST');
  });
});
