import { describe, it as test } from 'test';
import { expect } from 'expect';
import { comparable } from '../../comparable.ts';
import { nonOptional, optional, string } from '../../schemas/index.ts';
import { unwrap } from './unwrap.ts';

describe('unwrap', () => {
  test('should unwrap wrapped schema', () => {
    const schema1 = unwrap(optional(string()));
    expect(schema1).toEqual(comparable(string()));
    const schema2 = unwrap(nonOptional(optional(string())));
    expect(schema2).toEqual(comparable(optional(string())));
    const schema3 = unwrap(unwrap(nonOptional(optional(string()))));
    expect(schema3).toEqual(comparable(string()));
  });
});
