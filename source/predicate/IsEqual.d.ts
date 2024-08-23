/**
 * Returns a boolean for whether the two given types are equal.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/27024
 */
export type IsEqual<A, B> =
  (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2
    ? true
    : false;
