export const LOCAL_HOST = 'https://local.ya-praktikum.tech/';
export const PROD_HOST = 'https://hill-valley-space-game-10.ya-praktikum.tech/';
export const REDIRECT_URI = process.env.NODE_ENV === 'development' ? LOCAL_HOST : PROD_HOST;
export const OAUTH_URL = `https://ya-praktikum.tech/api/v2/oauth/yandex/service-id/?redirect_uri=${REDIRECT_URI}`;
