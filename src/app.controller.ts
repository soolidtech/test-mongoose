import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // curl command to test this endpoint: curl -X POST http://localhost:3000/createTemplate
  @Post('createTemplate')
  createTemplate(): string {
    return this.appService.createTemplate();
  }
}
