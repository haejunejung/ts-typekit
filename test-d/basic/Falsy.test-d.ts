import { expectAssignable, expectNotAssignable } from 'tsd';
import { Falsy } from '@/basic/Falsy';

// Valid cases where `Falsy` should be assinable
expectAssignable<Falsy>(0);
expectAssignable<Falsy>(false);
expectAssignable<Falsy>('');
expectAssignable<Falsy>(null);
expectAssignable<Falsy>(undefined);

// Cases where `Falsy` should not be assignable
expectNotAssignable<Falsy>('string');
expectNotAssignable<Falsy>(1);
expectNotAssignable<Falsy>(0n);
expectNotAssignable<Falsy>(true);
expectNotAssignable<Falsy>(Symbol('a'));
expectNotAssignable<Falsy>({});
expectNotAssignable<Falsy>([]);
expectNotAssignable<Falsy>(new Date());
expectNotAssignable<Falsy>(function () {});
expectNotAssignable<Falsy>(/regex/);
expectNotAssignable<Falsy>(new Map());
expectNotAssignable<Falsy>(new Set());
expectNotAssignable<Falsy>(Promise.resolve());
expectNotAssignable<Falsy>(new WeakMap());
expectNotAssignable<Falsy>(new WeakSet());
