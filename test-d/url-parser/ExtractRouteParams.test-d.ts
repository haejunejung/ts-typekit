import { ExtractRouteParams } from '@/url-parser';
import { expectType } from 'tsd';

declare function extractRouteParams<
  Route extends string,
  ParamType = string,
>(): ExtractRouteParams<Route, ParamType>;

// Should correclty handle basic pattern
expectType<{ userId: string } & { postId: string }>(
  extractRouteParams<'/users/:userId/posts/:postId'>()
);

expectType<{ userId: number } & { postId: number }>(
  extractRouteParams<'/users/:userId/posts/:postId', number>()
);

expectType<{ userId: boolean } & { postId: boolean }>(
  extractRouteParams<'/users/:userId/posts/:postId', boolean>()
);

// Should correctly handle optioanl parameter
expectType<{ userId?: string }>(extractRouteParams<'/users/:userId?'>());

// Should correctly handle repetitive parameters
expectType<{ filePath: string }>(extractRouteParams<'/files/:filePath+'>());
expectType<{ filePath?: string }>(extractRouteParams<'/files/:filePath*'>());
expectType<{ username: string }>(
  extractRouteParams<'/users/:username([a-z]+)'>()
);

// Should correctly handle regular expression parameters
expectType<{ userId: string }>(extractRouteParams<'/users/:userId(\\d+)'>());

// Should correctly handle complex pattern
expectType<{ userId?: string }>(extractRouteParams<'/users/:userId(\\d+)?'>());
expectType<{ filePath: string }>(extractRouteParams<'/files/:filePath(.*)+'>());
