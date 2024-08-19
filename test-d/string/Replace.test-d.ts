import { Replace } from '@/string';
import { expectType } from 'tsd';

declare function replace<
  S extends string,
  Pattern extends string,
  Replacement extends string,
>(
  string: S,
  pattern: Pattern,
  replacement: Replacement
): Replace<S, Pattern, Replacement>;

// Should correctly replace pattern to replacement.
expectType<'foo/bar.baz'>(replace('foo.bar.baz', '.', '/'));
expectType<'ts.typekit'>(replace('ts-typekit', '-', '.'));
expectType<'hello typescript'>(replace('hello world', 'world', 'typescript'));
expectType<'foo bar baz'>(replace('bar bar baz', 'bar', 'foo'));
expectType<''>(replace('', 'pattern', 'replacement'));
