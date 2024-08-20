import { Brand } from '@/special';
import { expectNotType, expectType } from 'tsd';

type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;

declare function createUserId(value: string): UserId;
declare function createPostId(value: string): PostId;

// Ensure UserId and PostId are distinct.
expectType<UserId>(createUserId('1'));
expectType<PostId>(createPostId('1'));
expectNotType<UserId>(createPostId('1'));
expectNotType<PostId>(createUserId('1'));
