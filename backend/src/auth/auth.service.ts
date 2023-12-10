import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private adminRepository: AdminRepository,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'admin' && password === 'adminpassword') {
      return { username };
    }
    return null;
  }

  async validateUserById(userId: string): Promise<any> {
    console.log('AuthService - ValidateUserById Method Called');
    console.log('Received userId:', userId);
    return null;
  }

  async login(user: any): Promise<string> {
    const payload = { username: user.username, userId: user.id };
    return this.jwtService.sign(payload);
  }
}
