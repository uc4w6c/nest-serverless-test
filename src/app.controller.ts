import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    const testId = this.configService.get<string>('test_id');
    return this.appService.getHello() + ', TEST ID:' + testId;
  }
}
