import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './authorizations/auth.module';
import { UsersModule } from './users/users.module';
require('dotenv').config();

@Module({
  imports: [UsersModule ,AuthModule, MongooseModule.forRoot(process.env.MONGODB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
