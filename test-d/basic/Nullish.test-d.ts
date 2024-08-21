import { expectAssignable, expectNotAssignable } from 'tsd';
import { Nullish } from '@/basic';

// Valid cases where `Nullish` should be assignable
expectAssignable<Nullish>(null);
expectAssignable<Nullish>(undefined);

// Cases wherer `Nullish` should not be assignable
expectNotAssignable<Nullish>('');
expectNotAssignable<Nullish>(true);
expectNotAssignable<Nullish>(false);
expectNotAssignable<Nullish>('string');
expectNotAssignable<Nullish>(0);
expectNotAssignable<Nullish>(1);
expectNotAssignable<Nullish>(0n);
expectNotAssignable<Nullish>(Symbol('a'));
expectNotAssignable<Nullish>({});
expectNotAssignable<Nullish>([]);
expectNotAssignable<Nullish>(new Date());
expectNotAssignable<Nullish>(function () {});
expectNotAssignable<Nullish>(/regex/);
expectNotAssignable<Nullish>(new Map());
expectNotAssignable<Nullish>(new Set());
expectNotAssignable<Nullish>(Promise.resolve());
expectNotAssignable<Nullish>(new WeakMap());
expectNotAssignable<Nullish>(new WeakSet());
