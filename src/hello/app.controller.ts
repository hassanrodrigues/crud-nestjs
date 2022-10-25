import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/hello")
 async postHello(@Body() name: string): Promise<string> {
    return this.appService.postHello(name);
  }
  
}
