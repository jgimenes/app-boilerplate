//src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private accountsService: AccountsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'suaChaveSecretaAqui',
    });
  }

  async validate(payload: { sub: string }) {
    const user = await this.accountsService.findAccountById(payload.sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
