import { HelmetData } from 'react-helmet';
import { RootState } from 'store';
import { renderObject } from './renderObject';

export const getHtml = (
  reactHtml: string,
  reduxState: RootState,
  helmet: HelmetData,
  nonce: string,
) =>
  `
  <!doctype html>
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${reactHtml}</div>
        <script nonce=${nonce}>window.__INITIAL_STATE__ = ${renderObject(reduxState)}</script>
        <script nonce=${nonce} src="/vendors/vendors.js"></script>
        <script nonce=${nonce} src="/main.bundle.js"></script>
      </body>
    </html> `;
