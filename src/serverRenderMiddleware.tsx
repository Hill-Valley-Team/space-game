import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './components/App';

export default (req: Request, res: Response) => {
  const location = req.url;
  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactHtml = ReactDOMServer.renderToString(jsx);

  res.status(200).send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
        <title>Scape Racing Game</title>
        <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="mount">${reactHtml}</div>
        <script src="/main.bundle.js"></script>
    </body>
    </html>
    `;
}
