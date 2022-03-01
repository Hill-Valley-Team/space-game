import { Router } from 'express';
import { forumRoutes } from './forum';
import { themesRoutes } from './theme';

const router: Router = Router();
forumRoutes(router);
themesRoutes(router);

export default router;
