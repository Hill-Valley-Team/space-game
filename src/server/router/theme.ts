import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

const jsonParser = express.json();

export const themesRoutes = (router: Router) => {
  router.post('/theme', jsonParser, ThemeAPI.create);
  router.get('/theme/:themeId', ThemeAPI.find);

  router.get('/usertheme', UserThemeAPI.find);
  router.post('/usertheme', jsonParser, UserThemeAPI.update);
  router.put('/usertheme', jsonParser, UserThemeAPI.create);
};
