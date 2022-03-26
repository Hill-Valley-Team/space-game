import { BaseApi } from '../BaseApi';
import { localBaseUrl } from '../consts';
import { AddForumCommentRequest, GetForumCommentsRequest, SetForumTopicRequest } from './types';

class ForumThreadApi extends BaseApi {
  constructor() {
    super('/forum', localBaseUrl);
  }
  public getForumComment = (commentId: number) => this.http.get(`/comment/${commentId}`);
  public getForumComments = (data: GetForumCommentsRequest) => this.http.post('/comments', data);
  public addForumComment = (data: AddForumCommentRequest) => this.http.put('', data);
  public setForumComment = (data: SetForumTopicRequest) => this.http.post('/comments', data);
  public deleteForumComment = (topicId: number) => this.http.delete(`/comment/${topicId}`);
}

export const forumThreadApi = new ForumThreadApi();
