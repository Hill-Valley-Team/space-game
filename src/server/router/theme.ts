import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

// const jsonParser = express.json();

export const themesRoutes = (router: Router) => {
  router.post('/theme', ThemeAPI.create);
  router.get('/theme', ThemeAPI.find);
  router.get('/theme/:userId', UserThemeAPI.find);
};
