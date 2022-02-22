import { Request, Response } from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { App } from '../../components/App';
import { getHtml } from '../utils/getHtml';
import { createAppStore } from 'store/store';

export default (req: Request, res: Response) => {
  const store = createAppStore({ userData: res.locals.user });

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactHtml = renderToString(jsx);
  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();

  res.send(getHtml(reactHtml, preloadedState, helmet, req.csrfToken()));
};
