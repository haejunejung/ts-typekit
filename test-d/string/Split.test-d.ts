import { expectType } from 'tsd';
import { Split } from '@/string';

declare function split<S extends string, Delimiter extends string>(
  string: S,
  separator: Delimiter
): Split<S, Delimiter>;

// Should correctly split a string by a delimiter into an array of segments.
expectType<['foo', 'bar', 'baz']>(split('foo.bar.baz', '.'));
expectType<['foo', 'bar', 'baz']>(split('foo@bar@baz', '@'));
expectType<['foo', 'bar', 'baz']>(split('foo/bar/baz', '/'));

// Should handle an empty string correctly when split by any delimiter.
expectType<['']>(split('', '/'));

// Should handle strings consisting only of delimiter by returning an empty array or processing appropriately.
expectType<[]>(split('', ''));
