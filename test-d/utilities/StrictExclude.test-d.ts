import { StrictExclude } from '@/utilities';
import { expectNever, expectType } from 'tsd';

declare function strictExclude<
  BaseType,
  ExcludedMembers extends BaseType,
>(): StrictExclude<BaseType, ExcludedMembers>;

// Should correctly handle basic case.
type Example0 = 'admin' | 'editor' | 'viewer';
type Expected0 = 'admin' | 'editor';
expectType<Expected0>(strictExclude<Example0, 'viewer'>());

// Should return the original type if excluding no members.
type Example1 = 'a' | 'b' | 'c';
type Expected1 = 'a' | 'b' | 'c';
expectType<Expected1>(strictExclude<Example1, never>());

// Should return `never` if excluding all members;
type Example2 = 'a' | 'b' | 'c';
expectNever(strictExclude<Example2, 'a' | 'b' | 'c'>());
