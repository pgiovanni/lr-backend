import { Injectable } from '@nestjs/common';
import { User } from './user.type';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(data: UserCreateDto): Promise<User> {
    const saltOrRounds = 10;
    data.passwordHash = await bcrypt.hash(data.passwordHash, saltOrRounds);
    return await this.prisma.user.create({ data });
  }

  async getUser(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}
