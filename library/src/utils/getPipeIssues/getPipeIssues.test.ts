import { describe, it as test } from 'test';
import { expect } from 'expect';
import { getPipeIssues } from './getPipeIssues.ts';

describe('getPipeIssues', () => {
  test('should return results with issues', () => {
    expect(getPipeIssues('test', 'error', 123)).toEqual({
      issues: [
        {
          validation: 'test',
          message: 'error',
          input: 123,
        },
      ],
    });
  });
});
