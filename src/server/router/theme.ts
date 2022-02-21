import { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';

export const themesRoutes = (router: Router) => {
  console.log('themes router');
  router.post('/', ThemeAPI.create);
  router.get('/', ThemeAPI.find);

  router.use('/theme', router);
};
