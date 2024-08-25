import { WithPrefix } from '@/string';
import { expectType } from 'tsd';

declare function withPrefix<
  S extends string,
  Prefix extends string,
>(): WithPrefix<S, Prefix>;

expectType<'onSubmit'>(withPrefix<'Submit', 'on'>());

type FormEventNames = 'submit' | 'reset' | 'change';
type CapitalizedFormEventNames = Capitalize<FormEventNames>;

expectType<'onSubmit' | 'onReset' | 'onChange'>(
  withPrefix<CapitalizedFormEventNames, 'on'>()
);
