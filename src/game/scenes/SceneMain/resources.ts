import { SceneResourcesConfig } from '../../engine/Resources/types';

export const sceneMainResources: SceneResourcesConfig = {
  images: [
    {
      name: 'sprBg',
      path: 'sprBg.png',
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
      name: 'sprCoins',
      path: 'sprCoins.png',
      options: {
        frameWidth: 47,
        frameHeight: 47,
      },
    },
    {
      name: 'sprEnemy0',
      path: 'sprEnemy0.png',
      options: {
        frameWidth: 99,
        frameHeight: 109,
      },
    },
    {
      name: 'sprEnemy1',
      path: 'sprEnemy1.png',
      options: {
        frameWidth: 79,
        frameHeight: 67,
      },
    },
    {
      name: 'sprEnemy2',
      path: 'sprEnemy2.png',
      options: {
        frameWidth: 108,
        frameHeight: 110,
      },
    },
    {
      name: 'sprSpaceShip',
      path: 'sprSpaceShip.png',
      options: {
        frameWidth: 54,
        frameHeight: 120,
      },
    },
  ],
};
