import { StrictOmit } from '@/utilities';
import { expectType } from 'tsd';

declare function strictOmit<T extends object, K extends keyof T>(): StrictOmit<
  T,
  K
>;

type Example = {
  a: number;
  b: string;
  c: boolean;
};

expectType<{ a: number; b: string }>(strictOmit<Example, 'c'>());
expectType<{}>(strictOmit<{ a: number }, 'a'>());
