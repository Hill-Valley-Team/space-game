import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';

const jsonParser = express.json();

export const themesRoutes = (router: Router) => {
  router.post('/', jsonParser, ThemeAPI.create);
  router.get('/', ThemeAPI.find);
  router.use('/theme', router);
};
