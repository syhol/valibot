import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toLowerCase } from './toLowerCase.ts';

describe('toLowerCase', () => {
  test('should transform to lower case', () => {
    const transform = toLowerCase();
    expect(transform('TeSt').output).toBe('test');
  });
});
