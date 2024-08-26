/**
 * @description
 * This type is a stricter version of TypeScript's `Extract` utility type.
 *
 * Unlike `Extract`, which allows extraction of members not present on the given type,
 * `StrictExtract` ensures that only members actually present in the type can be extracted.
 *
 * @template BaseType - The type from which you want to extract union members.
 * @template Subset - The members or types that you want to extract from the `BaseType`.
 *
 * @returns
 * A type consisting of members from `Type` that are also present in `Subset`.
 *
 * @example
 * type Example = "admin" | "editor" | "viewer";
 * type StrictExtractedExample = StrictExtract<Example, "admin" | "editor">;
 * // Result: "admin" | "editor"
 */
export type StrictExtract<BaseType, Subset extends BaseType> = Extract<
  BaseType,
  Subset
>;
