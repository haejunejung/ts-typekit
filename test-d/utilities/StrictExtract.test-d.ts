import { StrictExtract } from '@/utilities';
import { expectType } from 'tsd';

declare function strictExtract<
  BaseType,
  Subset extends BaseType,
>(): StrictExtract<BaseType, Subset>;

type Example = 'admin' | 'editor' | 'viewer';
expectType<'admin'>(strictExtract<Example, 'admin'>());
expectType<'admin' | 'editor'>(strictExtract<Example, 'admin' | 'editor'>());
