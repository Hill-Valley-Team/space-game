import express, { Router } from 'express';
import { ThemeAPI } from 'server/controllers/ThemeApi';
import { UserThemeAPI } from 'server/controllers/UserThemeApi';

export const themesRoutes = (router: Router) => {
  router.post('/theme', ThemeAPI.create);
  router.get('/theme', ThemeAPI.find);
  router.get('/theme/:userId', UserThemeAPI.find);
  router.post('/theme/:userId/:themeId', UserThemeAPI.update);
  router.put('/theme/:userId/:themeId', UserThemeAPI.create);
};
