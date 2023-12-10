import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'govind-chavan',
    });
  }

  async validate(payload: any): Promise<any> {
    console.log('JwtStrategy - Validate Method Called');
    console.log('Decoded Token Payload:', payload);

    const user = await this.authService.validateUserById(payload.userId);
    if (!user) {
      console.log('User not found');
      throw new UnauthorizedException();
    }

    console.log('User found:', user);
    return user;
  }
}
