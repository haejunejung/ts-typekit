import { PickWritable } from '@/utilities';
import { expectNotAssignable, expectType } from 'tsd';

declare function pickWritable<T, K extends keyof T>(): PickWritable<T, K>;

type T0 = {
  readonly a: string;
  readonly b: number;
  readonly c: boolean;
};

// Update all readonly to writable.
expectType<{ a: string; b: number; c: boolean }>(
  pickWritable<T0, 'a' | 'b' | 'c'>()
);

// Update only two readonly to writable.
expectType<{ a: string; b: number; readonly c: boolean }>(
  pickWritable<T0, 'a' | 'b'>()
);

// Check the type changes even if readonly types are updated to writable.
expectNotAssignable<{ a: number; b: number; readonly c: boolean }>(
  pickWritable<T0, 'c'>()
);

type T1 = {
  readonly a: string[];
  readonly b: [string, number];
  readonly c: { d: string; readonly e: boolean };
};

// Update Array & Tuple & Object
// The property of Object are remained.
expectType<{
  a: string[];
  b: [string, number];
  c: { d: string; readonly e: boolean };
}>(pickWritable<T1, 'a' | 'b' | 'c'>());
