import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parseAsync } from '../../methods/index.ts';
import { nanAsync } from './nanAsync.ts';

describe('nanAsync', () => {
  test('should pass only NaN', async () => {
    const schema = nanAsync();
    const input = NaN;
    const output = await parseAsync(schema, input);
    expect(output).toBe(input);
    await expect(parseAsync(schema, 123)).rejects.toThrowError();
    await expect(parseAsync(schema, '123')).rejects.toThrowError();
    await expect(parseAsync(schema, {})).rejects.toThrowError();
  });

  test('should throw custom error', async () => {
    const error = 'Value is not NaN!';
    await expect(parseAsync(nanAsync(error), 123)).rejects.toThrowError(error);
  });
});
