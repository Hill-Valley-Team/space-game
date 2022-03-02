import express, { Router } from 'express';
import { ForumTopicAPI } from 'server/controllers/ForumTopicApi';

const jsonParser = express.json();

export const forumRoutes = (router: Router) => {
  router.get('/forum/topic/:id', ForumTopicAPI.find);
  router.delete('/forum/topic/:id', ForumTopicAPI.delete);
  router.post('/forum/topic', jsonParser, ForumTopicAPI.findAll);
  router.put('/forum/topic', jsonParser, ForumTopicAPI.create);
};
