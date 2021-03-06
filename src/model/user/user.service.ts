import { Injectable } from '@nestjs/common';
import { User } from './user.type';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { prisma } from '../../prisma';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async createUser(data: UserCreateDto): Promise<User> {
    data.passwordHash = await bcrypt.hash(data.passwordHash, 10);

    return await prisma.user.create({ data });
  }

  async getUser(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}
