import { PickReadonly } from '@/utilities';
import { expectNotType, expectType } from 'tsd';

declare function pickReadonly<T, K extends keyof T>(): PickReadonly<T, K>;

type User = {
  id: number;
  image: string;
  name: string;
  age: string;
  job: string;
  hobby: string[];
};

type SomeReadonlyUser = {
  id: number;
  readonly image: string;
  readonly name: string;
  readonly age: string;
  readonly job: string;
  hobby: string[];
};

// Should be of type SomeReadonlyUser since only the selected properties are readonly.
expectType<SomeReadonlyUser>(
  pickReadonly<User, 'image' | 'name' | 'age' | 'job'>()
);

// Should not be of type SomeReadonlyUser since 'job' property is missing.
expectNotType<SomeReadonlyUser>(pickReadonly<User, 'image' | 'name' | 'age'>());
