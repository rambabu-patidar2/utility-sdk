import { describe, expect, it } from 'vitest';
import { slugify } from '../src/index.js';

describe('slugify', () => {
  it('lowercases and replaces separators with dashes', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('strips diacritics', () => {
    expect(slugify('Héllo Wörld')).toBe('hello-world');
  });

  it('collapses runs of symbols and trims edge dashes', () => {
    expect(slugify('  --Hi!!  there?? ')).toBe('hi-there');
  });

  it('returns an empty string when nothing alphanumeric remains', () => {
    expect(slugify('!!!')).toBe('');
  });

  it('rejects non-string input', () => {
    expect(() => slugify(42 as unknown as string)).toThrow(TypeError);
  });
});
