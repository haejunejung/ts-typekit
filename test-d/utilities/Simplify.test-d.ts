import { Simplify } from '@/utilities';
import { expectType } from 'tsd';

declare function simplify<T>(): Simplify<T>;

type Credentials = {
  email: string;
  password: string;
};

type UserInfo = {
  username: string;
  age: number;
  gender: 'M' | 'F';
};

type SimplifiedExpected = {
  email: string;
  password: string;
  username: string;
  age: number;
  gender: 'M' | 'F';
};

expectType<SimplifiedExpected>(simplify<Credentials & UserInfo>());

interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface Size {
  width: number;
  height: number;
}

type SimplifiedInterface = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
};

expectType<SimplifiedInterface>(simplify<Position & Size>());
