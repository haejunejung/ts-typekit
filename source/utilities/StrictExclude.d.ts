/**
 * @description
 * This type is a stricter version of TypeScript's `Exclude` utility type.
 *
 * Unlike `Exclude`, which allows excluded members not present on the given type,
 * `StrictExclude` ensures that only members actually present in the type can be excluded.
 *
 * @template BaseType - The type from which you want to exclude union members.
 * @template ExcludedMembers - The members or types that you want to exclude from `BaseType`.
 *
 * @returns
 * A new type that consists of all memebers of `BaseType` except that are assignable to `ExcludedMembers`.
 *
 * @example
 * type Example = "admin" | "editor" | "viewer";
 * type StrictExcludedExample = StrictExclude<Example, "admin">
 * // Result: "editor" | "viewer"
 */

export type StrictExclude<BaseType, ExcludedMembers extends BaseType> = Exclude<
  BaseType,
  ExcludedMembers
>;
