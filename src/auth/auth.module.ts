import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../model/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../model/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy, UserService, JwtService],
})
export class AuthModule {}
