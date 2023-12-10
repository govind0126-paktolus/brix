import { Body, Controller, Post, HttpCode, UseGuards } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { FormDataDto } from './DTO/form-data.dto';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class FormDataController {
  constructor(
    private readonly formDataService: FormDataService,
    private readonly authService: AuthService,
  ) {}

  @Post('form-data')
  @HttpCode(201)
  async createForm(@Body() formData: FormDataDto): Promise<FormDataDto> {
    return this.formDataService.create(formData);
  }

  @Post('admin-login')
  @UseGuards(AuthGuard('local'))
  async adminLogin(@Body() authDto: AuthDto): Promise<any> {
    const user = await this.authService.validateUser(
      authDto.username,
      authDto.password,
    );

    if (user) {
      const token = await this.authService.login(user);
      console.log('Access Token:', token);
      return { access_token: token, user: user };
    }
  }
}
