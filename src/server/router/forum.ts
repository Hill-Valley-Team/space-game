import express, { Router } from 'express';
import { ForumCommentAPI } from 'server/controllers/ForumCommentApi';
import { ForumTopicAPI } from 'server/controllers/ForumTopicApi';

const jsonParser = express.json();

export const forumRoutes = (router: Router) => {
  router.get('/forum/topic/:id', ForumTopicAPI.find);
  router.delete('/forum/topic/:id', ForumTopicAPI.delete);
  router.post('/forum/topic', jsonParser, ForumTopicAPI.findAll);
  router.put('/forum/topic', jsonParser, ForumTopicAPI.create);

  router.get('/forum/comment/:id', ForumCommentAPI.find);
  router.delete('/forum/comment/:id', ForumCommentAPI.delete);

  router.post('/forum/comments', jsonParser, ForumCommentAPI.findAllByTopic);
  router.put('/forum/comments', jsonParser, ForumCommentAPI.create);
};
