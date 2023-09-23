import { describe, it as test } from 'test';
import { expect } from 'expect';
import { toCustomAsync } from './toCustomAsync.ts';

describe('toCustomAsync', () => {
  test('should transform the custom', async () => {
    const transform1 = toCustomAsync<string>(async (input) => input.trim());
    expect((await transform1(' test ')).output).toBe('test');
    const transform2 = toCustomAsync<number>(async (input) => input + 1);
    expect((await transform2(1)).output).toBe(2);
  });
});
