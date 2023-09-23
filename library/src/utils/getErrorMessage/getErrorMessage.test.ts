import { describe, it as test } from 'test';
import { expect } from 'expect';
import { getErrorMessage } from './getErrorMessage.ts';

describe('getErrorMessage', () => {
  test('should return the final string', () => {
    const message = 'test';
    expect(getErrorMessage(message)).toBe(message);
    expect(getErrorMessage(() => message)).toBe(message);
  });
});
