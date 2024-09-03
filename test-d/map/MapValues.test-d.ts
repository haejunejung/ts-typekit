import { MapValues } from '@/map';
import { expectNever, expectType } from 'tsd';

declare function mapValues<T extends Map<unknown, unknown>>(): MapValues<T>;

// Should correctly handle string types.
type T0 = Map<never, string>;
expectType<string>(mapValues<T0>());

// Should correctly handle string literals.
type T1 = Map<never, '1' | '2' | '3'>;
expectType<'1' | '2' | '3'>(mapValues<T1>());

// Should correctly handle multiple types.
type T2 = Map<never, '1' | 1 | true | false | null | undefined>;
expectType<'1' | 1 | true | false | null | undefined>(mapValues<T2>());

// Should correctly handle object type and readonly properties.
type T3 = Map<never, '1' | { readonly key: string }>;
expectType<'1' | { readonly key: string }>(mapValues<T3>());

// Should correctly handle the `never` type.
type T4 = Map<never, never>;
expectNever(mapValues<T4>());
