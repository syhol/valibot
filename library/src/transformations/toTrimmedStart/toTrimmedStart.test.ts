import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toTrimmedStart } from './toTrimmedStart.ts';

describe('toTrimmedStart', () => {
  test('should transform to trimmed start', () => {
    const transform = toTrimmedStart();
    expect(transform(' test    ').output).toBe('test    ');
  });
});
