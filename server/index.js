import express, { Router } from 'express';
import serverRenderMiddleware from './serverRenderMiddleware';

const PORT = process.env.PORT || 3000;

const app = express();
// app.use(express.static('dist'));

// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.get('/', (req: Request, res: Response) => {
//   res.send(htmlPage);
// });

// app.get('/', (req: Request, res: Response) => {
//   res.send(path.join(__dirname, 'dist', 'index.html'));
// });

app
  .use(compression())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', serverRenderMiddleware);

app.listen(PORT, () => {
  console.log(`App on http://localhost:${PORT}`);
});
