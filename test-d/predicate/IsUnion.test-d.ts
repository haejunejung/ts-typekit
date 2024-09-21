import { IsUnion } from '@/predicate';
import { expectType } from 'tsd';

declare function isUnion<T>(): IsUnion<T>;

// Should be `false` if the type is not union.
expectType<false>(isUnion<[]>());
expectType<false>(isUnion<null>());
expectType<false>(isUnion<undefined>());
expectType<false>(isUnion<number>());
expectType<false>(isUnion<string>());
expectType<false>(isUnion<true>());
expectType<false>(isUnion<false>());

// Should be `true` if the type is union.
expectType<true>(isUnion<number | string>());
expectType<true>(isUnion<'foo' | 'bar'>());
