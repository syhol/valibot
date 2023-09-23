import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toTrimmedEnd } from './toTrimmedEnd.ts';

describe('toTrimmedEnd', () => {
  test('should transform to trimmed end', () => {
    const transform = toTrimmedEnd();
    expect(transform(' test    ').output).toBe(' test');
  });
});
