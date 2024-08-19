import { ReplaceAll } from '@/string';
import { expectType } from 'tsd';

declare function replaceAll<
  S extends string,
  Pattern extends string,
  Replacement extends string,
>(
  string: S,
  pattern: Pattern,
  replacement: Replacement
): ReplaceAll<S, Pattern, Replacement>;

// Should correctly replace pattern to replacement.
expectType<'foo/bar/baz'>(replaceAll('foo.bar.baz', '.', '/'));
expectType<'01:01:2000'>(replaceAll('01/01/2000', '/', ':'));
expectType<'username'>(replaceAll('__username__', '__', ''));
expectType<''>(replaceAll('', 'pattern', 'replacement'));
expectType<'hello, hello'>(replaceAll('help, help', 'p', 'lo'));
expectType<''>(replaceAll('', '', ''));
