import { IsUnknown } from '@/predicate';
import { expectType } from 'tsd';

// Should be `true` if the given type is `unknown`.
expectType<IsUnknown<unknown>>(true);

// Should be `false` otherwise.
expectType<IsUnknown<any>>(false);
expectType<IsUnknown<never>>(false);
expectType<IsUnknown<number>>(false);
expectType<IsUnknown<unknown[]>>(false);
expectType<IsUnknown<void>>(false);
expectType<IsUnknown<null>>(false);
expectType<IsUnknown<undefined>>(false);
