import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from '../components/App';
import { createAppStore } from '../store';
import { getHtml } from './utils/getHtml';

export default (req: Request, res: Response) => {
  const store = createAppStore();
  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactHtml = renderToString(jsx);
  const preloadedState = store.getState();

  res.status(200).send(getHtml(reactHtml, preloadedState));
};
