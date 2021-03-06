import { forumCommentApi } from 'api/Forum/ForumCommentApi';
import { forumTopicApi } from 'api/Forum/ForumTopicApi';
import {
  GetForumCommentsRequest,
  GetForumCommentsResponse,
  GetForumTopicsRequest,
  GetForumTopicsResponse,
} from 'api/Forum/types';
import { AxiosResponse } from 'axios';

const DEFAULT_LIMIT = 100;
const DEFAULT_OFFSET = 0;

export const getTopics = async (offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT) => {
  const response: AxiosResponse<GetForumTopicsResponse, GetForumTopicsRequest> =
    await forumTopicApi.getForumTopics({
      offset,
      limit,
    });
  return response.data.map((item) => item);
};

export const getTopic = async (topicId: number) => {
  const response = await forumTopicApi.getForumTopic(topicId);
  return response.data;
};

export const addTopic = async (message: string, title: string) => {
  const response = await forumTopicApi.addForumTopic({
    title,
    description: message,
  });
  return response.data;
};

export const getComments = async (
  topicId: number,
  offset = DEFAULT_OFFSET,
  limit = DEFAULT_LIMIT,
) => {
  const response: AxiosResponse<GetForumCommentsResponse, GetForumCommentsRequest> =
    await forumCommentApi.getForumComments({ topicId, limit, offset });
  return response.data.map((item) => item);
};

export const addNewComment = async (
  text: string,
  parentId: number | null,
  topicId: number,
  level: number,
) => {
  await forumCommentApi.addForumComment({
    text: text,
    parentId: parentId,
    topicId: topicId,
    level: level,
  });
};
