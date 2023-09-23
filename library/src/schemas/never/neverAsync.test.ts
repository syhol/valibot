import { describe, it as test } from 'test';
import { expect } from 'expect';
import { parseAsync } from '../../methods/index.ts';
import { neverAsync } from './neverAsync.ts';

describe('neverAsync', () => {
  test('should pass no value', async () => {
    const schema = neverAsync();
    await expect(parseAsync(schema, null)).rejects.toThrowError();
    await expect(parseAsync(schema, undefined)).rejects.toThrowError();
    await expect(parseAsync(schema, 123)).rejects.toThrowError();
    await expect(parseAsync(schema, 'test')).rejects.toThrowError();
    await expect(parseAsync(schema, {})).rejects.toThrowError();
  });

  test('should throw custom error', async () => {
    const error = 'Value is not never!';
    await expect(parseAsync(neverAsync(error), undefined)).rejects.toThrowError(
      error
    );
  });
});
