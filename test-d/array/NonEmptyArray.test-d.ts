import { NonEmptyArray } from '@/array';
import { expectError, expectNotAssignable, expectType } from 'tsd';

declare const sum: (...nums: NonEmptyArray<number>) => number;

// Should correctly handle non-empty array of numbers;
expectType<number>(sum(1, 2, 3));
expectType<number>(sum(1));

// Should not be assignable to an empty array.
expectNotAssignable<NonEmptyArray<number>>([]);
