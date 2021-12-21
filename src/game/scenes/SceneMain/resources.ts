import { SceneResourcesConfig } from '../../engine/Scene/types';

export const sceneMainResources: SceneResourcesConfig = {
  images: [
    {
      name: 'sprBg0',
      path: 'sprBg0.png',
    },
    {
      name: 'sprBg1',
      path: 'sprBg1.png',
    },
    {
      name: 'sprEnemy1',
      path: 'sprEnemy1.png',
    },
    {
      name: 'sprLaserEnemy0',
      path: 'sprLaserEnemy0.png',
    },
    {
      name: 'sprLaserPlayer',
      path: 'sprLaserPlayer.png',
    },
  ],
  spritesheets: [
    {
      name: 'sprExplosion',
      path: 'sprExplosion.png',
      options: {
        frameWidth: 32,
        frameHeight: 32,
      },
    },
    {
      name: 'sprEnemy0',
      path: 'sprEnemy0.png',
      options: {
        frameWidth: 16,
        frameHeight: 16,
      },
    },
    {
      name: 'sprEnemy2',
      path: 'sprEnemy2.png',
      options: {
        frameWidth: 16,
        frameHeight: 16,
      },
    },
    {
      name: 'sprPlayer',
      path: 'sprPlayer.png',
      options: {
        frameWidth: 16,
        frameHeight: 16,
      },
    },
  ],
};
