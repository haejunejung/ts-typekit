import { IsArray } from '@/predicate';
import { expectType } from 'tsd';

declare function isArray<T>(): IsArray<T>;

// Should be `true`.
expectType<true>(isArray<[]>());
expectType<true>(isArray<number[]>());
expectType<true>(isArray<readonly []>());
expectType<true>(isArray<readonly number[]>());
expectType<true>(isArray<[string | number]>());
expectType<true>(isArray<Array<string>>());
expectType<true>(isArray<ReadonlyArray<string>>());

// Should be `false`.
expectType<false>(isArray<number>());
expectType<false>(isArray<{}>());
expectType<false>(isArray<null>());
expectType<false>(isArray<undefined>());
expectType<false>(isArray<Function>());
expectType<false>(isArray<string | number>());
expectType<false>(isArray<Set<number>>());
expectType<false>(isArray<Map<string, number>>());
expectType<false>(isArray<Promise<number>>());
expectType<false>(isArray<Record<number, any>>());
