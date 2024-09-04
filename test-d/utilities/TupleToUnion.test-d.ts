import { TupleToUnion } from '@/utilities';
import { expectNotAssignable, expectType } from 'tsd';

declare function tupleToUnion<T>(): TupleToUnion<T>;

// Should be handle correctly tuple to union.
// It works correctly regardless of the order.
type T0 = ['a', 'b', 'c'];
type T1 = ['b', 'a', 'c'];
type T2 = ['c', 'b', 'a'];
expectType<'a' | 'b' | 'c'>(tupleToUnion<T0>());
expectType<'a' | 'b' | 'c'>(tupleToUnion<T1>());
expectType<'a' | 'b' | 'c'>(tupleToUnion<T2>());

// Should be handle correctly the object type.
type T3 = ['a' | { key: 'b' } | 'c'];
type T4 = [{ key: { k1: 'a' } }, { key: { k2: 'b' } }];
expectType<'a' | { key: 'b' } | 'c'>(tupleToUnion<T3>());
expectType<{ key: { k1: 'a' } } | { key: { k2: 'b' } }>(tupleToUnion<T4>());

// Should not be assingable except array/tuple type.
expectNotAssignable({});
expectNotAssignable(1);
expectNotAssignable('1');
expectNotAssignable(null);
expectNotAssignable(undefined);
expectNotAssignable(true);
