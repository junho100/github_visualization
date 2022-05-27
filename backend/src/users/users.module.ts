import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { LanguagesModule } from 'src/languages/languages.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), LanguagesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
