import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

const jsonParser = express.json();

export const themesRoutes = (router: Router) => {
  router.post('/theme', jsonParser, ThemeAPI.create);
  router.get('/theme', ThemeAPI.find);
  router.get('/theme/:userId', UserThemeAPI.find);
  // router.use('/theme', router);

  // router.get(`/theme`, SiteThemeAPI.getAll);
  // router.get(`/theme/:theme`, SiteThemeAPI.getByThemeName);
  // router.post(`/theme`, onlyAuthUserMiddleware, jsonParser, SiteThemeAPI.create);
  // router.patch(`/theme/:theme`, onlyAuthUserMiddleware, jsonParser, SiteThemeAPI.update);
  // router.delete(`/theme/:theme`, onlyAuthUserMiddleware, SiteThemeAPI.delete);
};
