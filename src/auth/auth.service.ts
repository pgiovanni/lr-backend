import { Injectable } from '@nestjs/common';
import { UserService } from '../model/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string, passHash: string): Promise<any> {
    const user = await this.userService.getUser(id);
    if (user && user.passwordHash === passHash) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }
}
