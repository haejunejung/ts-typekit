import { expectNever, expectType } from 'tsd';
import { MapKeys } from '@/map';

declare function mapKeys<T extends Map<unknown, unknown>>(): MapKeys<T>;

// Should extract map keys correctly as 'tomas' | 'sha'.
declare const phoneBook: Map<'tomas' | 'sha', string>;
expectType<'tomas' | 'sha'>(mapKeys<typeof phoneBook>());

// Should extract map keys correctly as string.
declare const hashMap: Map<string, string>;
expectType<string>(mapKeys<typeof hashMap>());

// Should correctly infer `any` as the key type.
expectType<any>(mapKeys<Map<any, string>>());

// Should not extract any keys and handle `never` type appropriately.
expectNever(mapKeys<Map<never, string>>());
