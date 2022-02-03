import { HelmetData } from 'react-helmet';
import { RootState } from 'store';
import { renderObject } from './renderObject';

export const getHtml = (reactHtml: string, reduxState: RootState, helmet: HelmetData) =>
  `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
            <link href="/main.css" rel="stylesheet">
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${reactHtml}</div>
            <script>
              window.__INITIAL_STATE__ = ${renderObject(reduxState)}
            </script>
            <script src="/main.bundle.js"></script>
        </body>
        </html>
        `;
