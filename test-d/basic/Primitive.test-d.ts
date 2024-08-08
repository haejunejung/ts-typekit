import { expectAssignable, expectNotAssignable } from 'tsd';
import { Primitive } from '@/basic/Primitive';

// Valid cases where `Primitive` should be assignable
expectAssignable<Primitive>('string');
expectAssignable<Primitive>(1);
expectAssignable<Primitive>(true);
expectAssignable<Primitive>(9007199254740991n);
expectAssignable<Primitive>(Symbol('a'));
expectAssignable<Primitive>(null);
expectAssignable<Primitive>(undefined);

// Cases where `Primitive` should not be assignable
expectNotAssignable<Primitive>({});
expectNotAssignable<Primitive>([]);
expectNotAssignable<Primitive>(new Date());
expectNotAssignable<Primitive>(function () {});
expectNotAssignable<Primitive>(/regex/);
expectNotAssignable<Primitive>(new Map());
expectNotAssignable<Primitive>(new Set());
expectNotAssignable<Primitive>(Promise.resolve());
expectNotAssignable<Primitive>(new WeakMap());
expectNotAssignable<Primitive>(new WeakSet());
