import { PickNonNullable } from '@/utilities';
import { expectNotType, expectType } from 'tsd';

declare function pickNonNullable<T, K extends keyof T>(): PickNonNullable<T, K>;

type SomeType = {
  readonly a: number | null | undefined;
  b: boolean;
  c: string;
};

type SomeTypeWithANonNullable = {
  readonly a: number;
  b: boolean;
  c: string;
};

// Should be `SomeTypeWithANonNullable`, because 'a' is the only property being made non-nullable.
expectType<SomeTypeWithANonNullable>(pickNonNullable<SomeType, 'a'>());

// Should not be `SomeTypeWithANonNullable` because 'b' was not made non-nullable.
expectNotType<SomeTypeWithANonNullable>(pickNonNullable<SomeType, 'b'>());

// Should be `SomeTypeWithANonNullable` when 'a' and 'b' are boht made non-nullable.
// Since 'b' is not nullable to begin with, it remains unchanged.
expectType<SomeTypeWithANonNullable>(pickNonNullable<SomeType, 'a' | 'b'>());
