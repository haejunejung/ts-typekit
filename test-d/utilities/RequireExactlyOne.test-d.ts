import { RequiredExactlyOne } from '@/utilities';
import { expectType } from 'tsd';

declare function requiredExactlyOne<T, K extends keyof T>(): RequiredExactlyOne<
  T,
  K
>;

// Should be exactly equal to original.
type T0 = {
  a: number;
  b: string;
  c: boolean;
};
type E0 = { a: number; b: string; c: boolean };
expectType<E0>(requiredExactlyOne<T0, 'a'>());

// Should require exactly one of 'a' or 'b'.
type T1 = T0;
type E1 =
  | { a: number; b?: never; c: boolean }
  | { a?: never; b: string; c: boolean };
expectType<E1>(requiredExactlyOne<T1, 'a' | 'b'>());

// Should require 'a' to be present.
type T2 = {
  a?: number;
  b: string;
  c: boolean;
};
type E2 = { a: number; b: string; c: boolean };
expectType<E2>(requiredExactlyOne<T2, 'a'>());
