export type SetForumTopicRequest = {
  userId: number;
  title: string;
  description: string;
};

export type AddForumTopicRequest = {
  userId: number;
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

export type GetForumTopicsResponse = ForumTopic[];
