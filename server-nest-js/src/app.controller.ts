import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { Secured } from './auth/secured.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Secured('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
