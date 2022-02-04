import { HelmetData } from 'react-helmet';
import { RootState } from 'store';
import { renderObject } from './renderObject';

export const getHtml = (reactHtml: string, reduxState: RootState, helmet: HelmetData) =>
  `
  <!doctype html>
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" href="/favicons/favicon.png" />
        <link href="/main.css" rel="stylesheet" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${reactHtml}</div>
        <script>window.__INITIAL_STATE__ = ${renderObject(reduxState)}</script>
        <script  src="/vendors/vendors.js"></script>
        <script src="/main.bundle.js"></script>
      </body>
    </html> `;
