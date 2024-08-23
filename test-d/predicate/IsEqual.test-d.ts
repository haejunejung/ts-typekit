import { IsEqual } from '@/predicate';
import { expectType } from 'tsd';

declare function isEqual<A, B>(): IsEqual<A, B>;

// Should be `true` if the two types are equal.
expectType<true>(isEqual<string, string>());
expectType<true>(isEqual<number, number>());
expectType<true>(isEqual<true, true>());
expectType<true>(isEqual<false, false>());
expectType<true>(isEqual<null, null>());
expectType<true>(isEqual<undefined, undefined>());
expectType<true>(isEqual<'1', '1'>());

// Should be `false` if the two types are not equal.
expectType<false>(isEqual<string, number>());
expectType<false>(isEqual<any, number>());
expectType<false>(isEqual<unknown, number>());
expectType<false>(isEqual<any, never>());
expectType<false>(isEqual<[any], [never]>());
expectType<false>(isEqual<'1', '1' | '2'>());
