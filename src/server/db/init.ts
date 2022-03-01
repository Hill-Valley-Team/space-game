import { THEMES } from 'hooks/useUserTheme/consts';
import { SiteTheme } from './models/SiteTheme';
import { User } from './models/User';
import { UserTheme } from './models/UserTheme';

export const initThemes = async () => {
  try {
    await SiteTheme.bulkCreate(THEMES);
    console.log('Themes have been created');
  } catch {
    console.log('Themes have not been created');
  }
};

export const initUser = async () => {
  try {
    await User.create({ id: 166307, firstName: 'Наталья', lastName: 'Гарипова' });
    console.log('Users have been added');
  } catch {
    console.log('Users have not been added');
  }
};

export const initDefaultUserTheme = async () => {
  try {
    await UserTheme.create({ userId: 166307, themeId: 1, device: '' });
    console.log('Users Theme have been setted');
  } catch {
    console.log('Users Theme have not been setted');
  }
};
