import { CommentListItem } from '../../pages/ForumThreadPage.ts/ThreadListItem/types';

export type SetForumTopicRequest = {
  title: string;
  description: string;
};

export type AddForumTopicRequest = {
  title: string;
  description: string;
};

export type GetForumTopicsRequest = {
  limit: number;
  offset: number;
};

export type ForumTopic = {
  createdAt: string;
  deletedAt: string | null;
  description: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

export type ForumComment = {
  id: number;
  createdAt: string;
  deletedAt: string | null;
  text: string;
  topicId: number;
  userId: number;
  parentId: number | null;
  level: number;
  comments?: CommentListItem[];
};

export type GetForumCommentsRequest = {
  topicId: number;
  limit: number;
  offset: number;
};

export type AddForumCommentRequest = {
  text: string;
  parentId: number | null;
  topicId: number;
  level: number;
};

export type GetForumCommentsResponse = ForumComment[];

export type GetForumTopicsResponse = ForumTopic[];
