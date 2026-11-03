const COMBINING_MARKS = /[\u0300-\u036f]/g;
const NON_ALPHANUMERIC_RUNS = /[^a-z0-9]+/g;
const EDGE_DASHES = /^-+|-+$/g;

/**
 * Converts text into a URL-safe slug, e.g. "Héllo, World!" -> "hello-world".
 */
export function slugify(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('slugify expects a string');
  }

  return input
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(NON_ALPHANUMERIC_RUNS, '-')
    .replace(EDGE_DASHES, '');
}
