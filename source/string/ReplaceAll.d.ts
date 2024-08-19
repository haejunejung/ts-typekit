/**
 * @description
 * A utility type that replaces the all of specified pattern in a string
 * with a given replacement string.
 *
 * @template {string} S - The string in which the replacement will be made.
 * @template {string} Pattern - The substring pattern to be replaced.
 * @template {string} Replacement - The substring that will replace the pattern.
 *
 * @returns
 * A new string where the all of specified pattern in the original string is replaced by the replacement.
 *
 * @example
 * type T0 = ReplaceAll<'foo.bar.baz', '.', '/'>; // 'foo/bar/baz'
 * type T1 = ReplaceAll<'__username__', '__', ''>; // 'username'
 * type T2 = ReplaceAll<'', 'pattern', 'replacement'>; // ''
 */

export type ReplaceAll<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${ReplaceAll<Tail, Pattern, Replacement>}`
  : S;
