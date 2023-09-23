import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toTrimmed } from './toTrimmed.ts';

describe('toTrimmed', () => {
  test('should transform to trimmed', () => {
    const transform = toTrimmed();
    expect(transform(' test    ').output).toBe('test');
  });
});
