import express from 'express';
import cors from 'cors';
import router from '../routes';

const port = Number(process.env.PORT) || 3000;
const server = express();

server.use(cors({ origin: '*' }));

server.use(router);

export default server;

export function initExpress() {
  server.listen(port, () => {
    console.log(`Server started at port ${port}!`);
  });
}
