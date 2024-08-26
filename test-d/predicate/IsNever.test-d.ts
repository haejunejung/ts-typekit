import { IsNever } from '@/predicate';
import { expectType } from 'tsd';

declare const _never: never;
declare function isNever<T>(): IsNever<T>;

// Should be `true` only if `never`.
expectType<true>(isNever<never>());
expectType<true>(isNever<typeof _never>());
expectType<true>(isNever<'a' & never>());

// Should be `false` otherwise.
expectType<false>(isNever<number>());
expectType<false>(isNever<null>());
expectType<false>(isNever<undefined>());
expectType<false>(isNever<any>());
expectType<false>(isNever<void>());
expectType<false>(isNever<unknown>());
