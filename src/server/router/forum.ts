import express, { Router } from 'express';
import { ForumTopicAPI } from 'server/controllers/ForumTopicApi';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

export const forumRoutes = (router: Router) => {
  router.get('/forum/topic/:id', ForumTopicAPI.find);
  router.get('/forum/topic', ForumTopicAPI.find);
  router.put('/forum/topic', ForumTopicAPI.create);
};
