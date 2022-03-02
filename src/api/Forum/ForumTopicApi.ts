import { BaseApi } from '../BaseApi';
import { localBaseUrl } from '../consts';
import { AddForumTopicRequest, GetForumTopicsRequest, SetForumTopicRequest } from './types';

class ForumTopicApi extends BaseApi {
  constructor() {
    super('/forum/topic', localBaseUrl);
  }

  public getForumTopics = (data: GetForumTopicsRequest) => this.http.post('', data);
  public getForumTopic = (topicId: number) => this.http.get(`${topicId}`);
  public setForumTopic = (data: SetForumTopicRequest) => this.http.post('', data);
  public addForumTopic = (data: AddForumTopicRequest) => this.http.put('', data);
  public deleteForumTopic = (topicId: number) => this.http.delete(`${topicId}`);
}

export const forumTopicApi = new ForumTopicApi();
