import { describe, expect, it } from 'vitest';
import { chunk } from '../src/index.js';

describe('chunk', () => {
  it('splits items into groups of the given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('returns an empty array for empty input', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  it('returns one group when size exceeds length', () => {
    expect(chunk(['a', 'b'], 10)).toEqual([['a', 'b']]);
  });

  it.each([0, -1, 1.5, Number.NaN])('rejects invalid size %s', (size) => {
    expect(() => chunk([1], size)).toThrow(RangeError);
  });
});
