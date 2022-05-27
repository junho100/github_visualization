import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  getUsers() {
    const users = this.userRepository.find({
      order: {
        total: 'DESC',
      },
    });

    return users;
  }

  async createUser(username: string) {
    const user = new UserEntity();
    user.id = uuid();
    user.username = username;
    user.total = 2;

    await this.userRepository.save(user);
  }
}
