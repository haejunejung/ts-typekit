import { Split } from '@/string/Split';

/**
 * @description
 * Extracts route parameters from a given URL pattern and maps them to a specified type.
 *
 * This utility type takes a URL pattern as a string and returns an object type where the keys are
 * the dynamic segments of the URL (denoted by `:paramName`) and the values are of a specified type,
 * which defaults to `string`.
 *
 * @template {string} URL - The URL pattern from which to extract route parameters.
 * @template ParamType - The type to assign each extracted route parameters. Defaults to `string`.
 *
 * @example
 * type T0 = ExtractRouteParams<'/users/:userId/posts/:postId'>
 * // Result: { userId: string, postId: string }
 *
 * type T1 = ExtractRouteParams<'/users/:userId/posts/:postId', number>
 * // Result: { userId: number, postId: number }
 *
 * type T2 = ExtractRouteParams<'/users'>
 * // Result: { }
 *
 * type T3 = ExtractRouteParams<'/users/:/posts'>
 * // Result: { }
 */

export type ExtractRouteParams<URL extends string, ParamType = string> =
  Split<URL, '/'> extends (infer Part)[]
    ? {
        [Key in Part extends `:${infer Param}`
          ? Param extends ''
            ? never
            : Param
          : never]: ParamType;
      }
    : {};
