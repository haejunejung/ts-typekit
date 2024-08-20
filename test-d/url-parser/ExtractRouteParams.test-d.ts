import { ExtractRouteParams } from '@/url-parser';
import { expectType } from 'tsd';

declare function extractRouteParams<
  URL extends string,
  ParamType = string,
>(): ExtractRouteParams<URL, ParamType>;

type expectedT0 = {
  userId: string;
  postId: string;
};

type expectedT1 = {
  userId: number;
  postId: number;
};

type EmptyObject = {};

// Should correctly extract the route params.
expectType<expectedT0>(extractRouteParams<'/users/:userId/posts/:postId'>());
expectType<expectedT1>(
  extractRouteParams<'/users/:userId/posts/:postId', number>()
);

// Should return an empty object `{}` when the URL path contains no valid parameters
expectType<EmptyObject>(extractRouteParams<'/users'>());
expectType<EmptyObject>(extractRouteParams<'/posts'>());

// Should return an empty object `{}` when the URL path includes an invalid parameter
// with only ':' and no identifier following it.
expectType<EmptyObject>(extractRouteParams<'/users/:/posts'>());
