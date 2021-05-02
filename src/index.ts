import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { createConnection } from 'typeorm';
import { initExpress } from './services/express';

async function bootstrap() {
  try {
    await createConnection();
    initExpress();
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
