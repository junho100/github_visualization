import { Body, Controller, Get, Post } from '@nestjs/common';
import { LanguagesService } from 'src/languages/languages.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly languageService: LanguagesService,
  ) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() body) {
    const username = body.username;
    const total = await this.languageService.getTotalLanguages(username);
    return await this.usersService.createUser(username, total);
  }
}
