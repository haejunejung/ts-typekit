/**
 * @description
 * A utility type that replaces the first occurrence of a specified pattern in a string
 * with a given replacement string.
 *
 * @template {string} S - The string in which the replecement will be made.
 * @template {string} Pattern - The substring pattern to be replaced.
 * @template {string} Replacement - The substring that will replace the pattern.
 *
 * @returns
 * A new string where the first occurrence of the pattern in the original string is replaced by the replacement
 *
 * @example
 * type T0 = Replace<'hello world', 'world', 'typescript'> // 'hello typescript'
 * type T1 = Replace<'bar bar baz', 'bar', 'foo'> // 'foo bar baz'
 * type T2 = Replace<'', 'pattern', 'replacement'> // ''
 */

export type Replace<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : S;
