/**
 * @description
 * This type is a stricter version of TypeScript's `Omit` utility types.
 *
 * Unlike `Omit`, which allows omission of keys not present on the given type,
 * `StrictOmit` ensures that only keys actually present in the type can be omitted.
 * This provides a more controlled and predictable type manipulation, preventing
 * unintended omissions of non-existent keys.
 *
 * @template {object} ObjectType - The type from which properties will be omitted.
 * @template ExcludedKeys - The keys to be omitted, which must be present in `ObjectType`.
 *
 * @returns
 * A type with the properties of `ObjectType`, excluding those specified in `ExcludedKeys`.
 *
 * @example
 * type Example = {
 *  a: number;
 *  b: string;
 *  c: boolean;
 * }
 *
 * // Omit can exclude keys not present on the type.
 * type OmittedExample = Omit<Example, 'a' | 'noexistent'>;
 * // Result: { b: string; c: boolean; }
 *
 * // StrictOmit enforces that only existing keys can be omitted.
 * type StrictOmittedExample = StrictOmit<Example, 'a' | 'noexistent'>
 * // Type '"a" | "noexistent"' does not satisfy the constraint 'keyof Example'.
 * // Type '"noexistent"' is not assignable to type 'keyof Example'.
 */
export type StrictOmit<
  ObjectType extends object,
  ExcludedKeys extends keyof ObjectType,
> = Pick<ObjectType, Exclude<keyof ObjectType, ExcludedKeys>>;
