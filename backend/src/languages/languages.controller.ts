import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Get()
  async getLanguages(@Query('username') username, @Body() body) {
    if (body.ingore) {
      return this.languagesService.getConditionalLanguages(
        username,
        body.ingore,
      );
    } else {
      const data = await this.languagesService.getLanguages(username);
      return data;
    }
  }
}
