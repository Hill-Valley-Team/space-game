import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../src/components/App';
import { getHtml } from './getHTML';

export default (req: Request, res: Response) => {
  const jsx = <App />;
  const reactHtml = ReactDOMServer.renderToString(jsx);

  res.send(getHtml(reactHtml));
};
