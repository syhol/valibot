import { describe, it as test } from 'test';
import { expect } from 'expect';
import { numberAsync, object, string } from '../../schemas/index.ts';
import { parseAsync } from './parseAsync.ts';

describe('parseAsync', () => {
  test('should parse schema', async () => {
    const output1 = await parseAsync(string(), 'hello');
    expect(output1).toBe('hello');
    const output2 = await parseAsync(numberAsync(), 123);
    expect(output2).toBe(123);
    const output3 = await parseAsync(object({ test: string() }), {
      test: 'hello',
    });
    expect(output3).toEqual({ test: 'hello' });
  });

  test('should throw error', async () => {
    await expect(parseAsync(string(), 123)).rejects.toThrowError(
      'Invalid type'
    );
    await expect(parseAsync(numberAsync(), 'hello')).rejects.toThrowError(
      'Invalid type'
    );
    await expect(
      parseAsync(object({ test: string() }), {})
    ).rejects.toThrowError('Invalid type');
  });
});
