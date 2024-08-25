/**
 * @description
 * The `WithPrefix` type creates a new string type by prepending a specified prefix to an existing
 * string type. This enables automatic addition of a consistent prefix to string types.
 *
 * @template {string} BaseString - The base string type to which the prefix will be added.
 * @template {string} Prefix - The prefix to be added.
 *
 * @returns
 * A new string type with the specified prefix prepended.
 *
 * @example
 * type FormEventNames = "submit" | "reset" | "change";
 * type CapitalizedFormEventNames = Capitalize<FormEventNames>;
 * type FormHandlerNames = WithPrefix<CapitalizedFormEventNames, "on">
 * // Result: "onSubmit" | "onReset" | "onChange"
 */

export type WithPrefix<
  BaseString extends string,
  Prefix extends string,
> = `${Prefix}${BaseString}`;
