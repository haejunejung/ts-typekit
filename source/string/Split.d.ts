/**
 * @description - A utility type that splits a string into an array of substrings based on a specified delimiter.
 *
 * @template {string} S - The string to be split.
 * @template {string} Delimiter - The delimiter used to split the string.
 *
 * @returns - An array of substrings split by the given delimiter.
 *
 * @example
 * type T1 = Split<'foo.bar.baz', '.'> // ['foo', 'bar', 'baz']
 * type T2 = Split<'foo/bar/baz', '/'> // ['foo', 'bar', 'baz']
 * type T3 = Split<'', '/'> // ['']
 */
export type Split<
  S extends string,
  Delimiter extends string,
> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
    ? []
    : [S];
