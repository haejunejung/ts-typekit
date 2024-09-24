import { UnionToIntersection } from '@/utilities';
import { expectNever, expectType } from 'tsd';

declare function unionToIntersection<T>(): UnionToIntersection<T>;

// T0: Object literal union
type T0 = { a: number } | { b: string };
expectType<{ a: number; b: string }>(unionToIntersection<T0>());

// T1: Union of object literal and simple type
type T1 = { a: number } | 'A';
expectType<{ a: number } & 'A'>(unionToIntersection<T1>());

// T2: Combination of object literal, function, and tuple
type T2 = { a: number } | (() => void) | [number];
expectType<{ a: number } & (() => void) & [number]>(unionToIntersection<T2>());

// T3: Union of function types
type T3 = (() => string) | ((x: number) => number);
expectType<(() => string) & ((x: number) => number)>(unionToIntersection<T3>());

// T4: Union of tuple types
type T4 = [number] | [string];
expectType<[number] & [string]>(unionToIntersection<T4>());

// T5: Nested object literal
type T5 = { a: { b: string } } | { a: { c: number } };
expectType<{
  a: {
    b: string;
  } & {
    c: number;
  };
}>(unionToIntersection<T5>());

// T6: Union of object literal and tuple
type T6 = { a: number } | [string];
expectType<{ a: number } & [string]>(unionToIntersection<T6>());

// T7: Combination of object literal, primitive type, and tuple
type T7 = { a: string } | 'B' | [number];
expectType<{ a: string } & 'B' & [number]>(unionToIntersection<T7>());

// T8: Simple union type (not an object)
type T8 = 'A' | 'B' | 'C' | 'D' | 'E';
expectNever(unionToIntersection<T8>());
