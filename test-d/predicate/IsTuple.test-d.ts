import { IsTuple } from '@/predicate';
import { expectType } from 'tsd';

declare function isTuple<T>(): IsTuple<T>;

// Should be `true`.
expectType<true>(isTuple<[]>());
expectType<true>(isTuple<[number]>());
expectType<true>(isTuple<[number, string]>());
expectType<true>(isTuple<readonly [number]>());

// Should be `false`.
expectType<false>(isTuple<any[]>());
expectType<false>(isTuple<unknown[]>());
expectType<false>(isTuple<number[]>());
expectType<false>(isTuple<Array<number>>());
expectType<false>(isTuple<ReadonlyArray<number>>());
