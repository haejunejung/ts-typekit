import { PickOptional } from '@/utilities';
import { expectType } from 'tsd';

declare function pickOptional<T, K extends keyof T>(): PickOptional<T, K>;

// Should correctly creates a new type where the specified keys are made optional.
type User = {
  id: number;
  name: string;
  age: number;
};

type UserIdOptional = {
  id?: number;
  name: string;
  age: number;
};

expectType<UserIdOptional>(pickOptional<User, 'id'>());

// Should correclty handle union type.
type TA = {
  a: number;
  b: string;
  c: boolean;
};

type TB = {
  d: null;
  e: '0';
};

type Expected = {
  a: number;
  b?: string;
  c?: boolean;
  d?: null;
  e: '0';
};

expectType<Expected>(pickOptional<TA & TB, 'b' | 'c' | 'd'>());
