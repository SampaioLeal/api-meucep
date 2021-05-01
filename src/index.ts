import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { createConnection } from 'typeorm';
import { initExpress } from './services/express';

async function bootstrap() {
  const port = Number(process.env.PORT) || 3000;

  try {
    await createConnection();
    initExpress(port);
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
