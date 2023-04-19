import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

// hi 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
