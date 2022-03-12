import { forumThreadApi } from 'api/Forum/ForumThreadApi';
import { forumTopicApi } from 'api/Forum/ForumTopicApi';
import {
  GetForumCommentsRequest,
  GetForumCommentsResponse,
  GetForumTopicsRequest,
  GetForumTopicsResponse,
} from 'api/Forum/types';
import { AxiosResponse } from 'axios';
import htmlescape from 'htmlescape';

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

export const addTopic = async (message: string, title?: string) => {
  const response = await forumTopicApi.addForumTopic({
    title: htmlescape(title),
    description: htmlescape(message),
  });
  return response.data;
};

export const getComments = async (
  topicId: number,
  offset = DEFAULT_OFFSET,
  limit = DEFAULT_LIMIT,
) => {
  const response: AxiosResponse<GetForumCommentsResponse, GetForumCommentsRequest> =
    await forumThreadApi.getForumComments({ topicId, limit, offset });
  return response.data.map((item) => item);
};
