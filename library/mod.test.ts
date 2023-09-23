import { describe, it as test } from 'test';
import { expect } from 'expect';

describe('Deno compatibility', () => {
  test('should be able to import mod.ts', async () => {
    const module = await import('./mod.ts');
    expect(module).not.toBeUndefined();
  });
});
