import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

export const themesRoutes = (router: Router) => {
  router.post('/theme', ThemeAPI.create);
  router.get('/theme/:themeId', ThemeAPI.find);
  router.get('/usertheme/:userId', UserThemeAPI.find);
  router.post('/usertheme/:userId/:themeId', UserThemeAPI.update);
  router.put('/usertheme/:userId/:themeId', UserThemeAPI.create);
};
