import { SceneResourcesConfig } from '../../engine/Resources/types';

export const sceneMainResources: SceneResourcesConfig = {
  images: [
    {
      name: 'sprBg0',
      path: 'sprBg0.png',
    },
  ],
  spritesheets: [
    {
      name: 'sprCoins',
      path: 'sprCoins.png',
      options: {
        frameWidth: 47,
        frameHeight: 47,
        colls: 7,
      },
    },
    {
      name: 'sprEnemy0',
      path: 'sprEnemy0.png',
      options: {
        frameWidth: 79,
        frameHeight: 67,
      },
    },
    {
      name: 'sprEnemy1',
      path: 'sprEnemy1.png',
      options: {
        frameWidth: 90,
        frameHeight: 90,
        colls: 6,
      },
    },
    {
      name: 'sprEnemy2',
      path: 'sprEnemy2.png',
      options: {
        frameWidth: 90,
        frameHeight: 90,
      },
    },
    {
      name: 'sprSpaceShip',
      path: 'sprSpaceShip.png',
      options: {
        frameWidth: 54,
        frameHeight: 120,
        colls: 8,
        rows: 2,
      },
    },
  ],
};
