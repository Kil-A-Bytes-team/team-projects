import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //Set up CORS middleware
  const corsOptions: CorsOptions = {origin: "http://localhost:3333", //Update with the allowed origin(s) 
  credentials: true, // Set to true if you need to pass cookies or other credentials 
  };
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe()); // Optional: Use a global validation pipe

  await app.listen(8000);
}
bootstrap();
