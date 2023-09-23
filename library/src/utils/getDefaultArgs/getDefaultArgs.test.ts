import { describe, it as test } from 'test';
import { expect } from 'expect';
import { getDefaultArgs } from './getDefaultArgs.ts';

describe('getDefaultArgs', () => {
  test('should return error and pipe', () => {
    expect(getDefaultArgs(undefined, undefined)).toEqual([
      undefined,
      undefined,
    ]);
    expect(getDefaultArgs('error', undefined)).toEqual(['error', undefined]);
    expect(getDefaultArgs([], undefined)).toEqual([undefined, []]);
    expect(getDefaultArgs('error', undefined)).toEqual(['error', undefined]);
    expect(getDefaultArgs('error', [])).toEqual(['error', []]);
  });
});
