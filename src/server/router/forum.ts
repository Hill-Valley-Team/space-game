import express, { Router } from 'express';
import { ForumCommentAPI } from 'server/controllers/ForumCommentApi';
import { ForumTopicAPI } from 'server/controllers/ForumTopicApi';
import { forbidden } from 'server/middlewares/forbidden';

const jsonParser = express.json();

export const forumRoutes = (router: Router) => {
  router.get('/forum/topic/:id', ForumTopicAPI.find);
  router.delete('/forum/topic/:id', forbidden, ForumTopicAPI.delete);
  router.post('/forum/topic', jsonParser, forbidden, ForumTopicAPI.findAll);
  router.put('/forum/topic', jsonParser, forbidden, ForumTopicAPI.create);

  router.get('/forum/comment/:id', ForumCommentAPI.find);
  router.delete('/forum/comment/:id', forbidden, ForumCommentAPI.delete);

  router.post('/forum/comments', jsonParser, forbidden, ForumCommentAPI.findAllByTopic);
  router.put('/forum/comments', jsonParser, forbidden, ForumCommentAPI.create);
};
