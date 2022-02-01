import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from '../components/App';
import { store } from '../store/store';
import { getHtml } from './getHtml';

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
  const preloadedState = store.getState();

  res.status(200).send(getHtml(reactHtml, preloadedState));
};
