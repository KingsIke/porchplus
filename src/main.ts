/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  try {
    console.log(process.env.port)
    await app.listen(3000, () => {
      console.log(`Server on port : 3000`);
    });
  } catch (error) {
    console.log(error);
  }}
bootstrap();
