import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parseAsync } from '../../methods/index.ts';
import { string } from '../string/index.ts';
import { nullishAsync } from './nullishAsync.ts';

describe('nullishAsync', () => {
  test('should pass also null and undefined', async () => {
    const schema = nullishAsync(string());
    const input = 'test';
    const output = await parseAsync(schema, input);
    expect(output).toBe(input);
    expect(await parseAsync(schema, null)).toBeNull();
    expect(await parseAsync(schema, undefined)).toBeUndefined();

    await expect(parseAsync(schema, 123)).rejects.toThrowError();
    await expect(parseAsync(schema, false)).rejects.toThrowError();
    await expect(parseAsync(schema, {})).rejects.toThrowError();
  });

  test('should use default if required', async () => {
    const default_ = 'default';
    const input = 'test';

    const schema1 = nullishAsync(string(), default_);
    expect(await parseAsync(schema1, input)).toBe(input);
    expect(await parseAsync(schema1, null)).toBe(default_);
    expect(await parseAsync(schema1, undefined)).toBe(default_);

    const schema2 = nullishAsync(string(), () => default_);
    expect(await parseAsync(schema2, input)).toBe(input);
    expect(await parseAsync(schema2, null)).toBe(default_);
    expect(await parseAsync(schema2, undefined)).toBe(default_);
  });
});
