import { Primitive } from '@/basic';
import { IsAny } from '@/predicate';
import { expectType } from 'tsd';

declare function isAny<T>(): IsAny<T>;

expectType<true>(isAny<any>());
expectType<false>(isAny<never>());
expectType<false>(isAny<unknown>());
expectType<false>(isAny<Primitive>());
expectType<false>(isAny<[]>());
expectType<false>(isAny<{}>());
expectType<false>(isAny<Array<any>>());
