import express, { Router } from 'express';
import { ForumCommentAPI } from 'server/controllers/ForumCommentApi';
import { ForumTopicAPI } from 'server/controllers/ForumTopicApi';
import { onlyAuth } from 'server/middlewares/onlyAuth';

const jsonParser = express.json();

export const forumRoutes = (router: Router) => {
  router.get('/forum/topic/:id', onlyAuth, ForumTopicAPI.find);
  router.delete('/forum/topic/:id', onlyAuth, ForumTopicAPI.delete);
  router.post('/forum/topic', jsonParser, onlyAuth, ForumTopicAPI.findAll);
  router.put('/forum/topic', jsonParser, onlyAuth, ForumTopicAPI.create);

  router.get('/forum/comment/:id', ForumCommentAPI.find);
  router.delete('/forum/comment/:id', onlyAuth, ForumCommentAPI.delete);

  router.post('/forum/comments', jsonParser, onlyAuth, ForumCommentAPI.findAllByTopic);
  router.put('/forum/comments', jsonParser, onlyAuth, ForumCommentAPI.create);
};
