import { Injectable } from '@nestjs/common';
import { User } from '../types/user.type';
import { prisma } from '../../prisma';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async createUser(data: UserCreateDto): Promise<User> {
    return await prisma.user.create({ data });
  }

  async getUser(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}
