import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(id: string, passwordHash: string): Promise<any> {
    const user = await this.authService.validateUser(id, passwordHash);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
