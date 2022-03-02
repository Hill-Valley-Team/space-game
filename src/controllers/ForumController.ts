import { forumTopicApi } from 'api/Forum/ForumTopicApi';
import { GetForumTopicsRequest, GetForumTopicsResponse } from 'api/Forum/types';
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
