import { PickRequired } from '@/utilities';
import { expectType } from 'tsd';

declare function pickRequired<T, K extends keyof T>(): PickRequired<T, K>;

// Should correctly creates a new type where the specified keys are made required.
type Post = {
  id: number;
  authorId: number;
  role: 'seller' | 'buyer';
  price?: number;
};

type PriceRequiredPost = {
  id: number;
  authorId: number;
  role: 'seller' | 'buyer';
  price: number;
};

expectType<PriceRequiredPost>(pickRequired<Post, 'price'>());

// Should correctly handle union type.
type TA = {
  a: number;
  b?: string;
  c?: boolean;
};

type TB = {
  d?: null;
  e: '0';
};

type Expected = {
  a: number;
  b: string;
  c: boolean;
  d: null;
  e: '0';
};

expectType<Expected>(pickRequired<TA & TB, 'b' | 'c' | 'd'>());
