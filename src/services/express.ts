import express from 'express';
import cors from 'cors';
import router from '../routes';

export function initExpress(port: number) {
  const app = express();

  app.use(cors({ origin: '*' }));

  app.use(router);

  app.listen(port, () => {
    console.log(`Server started at port ${port}!`);
  });
}
