/**
 * A type representing all the values that are considered falsy in JavaScript.
 *
 * In JavaScript, falsy values are those that evaluate to `false` in a Boolean context.
 * This type includes:
 *
 * - `false` : The Boolean false value.
 * - `''` : An empty string.
 * - `0`: The number zero.
 * - `null`: The null value representing the absence of any value.
 * - `undefined`: A value that indicates a variable has not been assigned a value.
 *
 * This type can be useful for defining variables, parameters, or return types that
 * should only accept or return falsy values.
 */

export type Falsy = false | '' | 0 | null | undefined;
