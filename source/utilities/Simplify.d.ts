/**
 * @description
 * The `Simplify` utility type is needed to simplify union TypeScript types by resolving their
 * properties into a single structure.
 *
 * It takes a type `T` and returns a new type where all the properties of `T` are retainted,
 * but any union structures are resolved into a straightforward, plain object type.
 *
 * This can be particulary useful when dealing with intersection types that might result in verbose
 * or hard-to-read type definitions.
 *
 * @template T - The type you want to simplify.
 *
 * @returns - A new type that is a simplifies version of `T`.
 *
 * @example
 * type Credentials = {
 *  email: string;
 *  password: string;
 * };
 *
 * type UserInfo = {
 *  username: string;
 *  age: number;
 *  gender: 'M' | 'F';
 * };
 *
 * type CreateUserRequest = Simplify<Credentials & UserInfo>;
 * // Result will be
 * // {
 * //   email: string;
 * //   password: string;
 * //   username: string;
 * //   age: number;
 * //   gender: 'M' | 'F';
 * // }
 */
export type Simplify<T> = { [Key in keyof T]: T[Key] } & {};
