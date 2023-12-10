/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormDataService } from './form-data.service';
import { FormDataController } from './form-data.controller';
import { FormDataRepository } from './form-data.repository'; 
import { FormData } from 'src/formData.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([FormData, FormDataRepository]), AuthModule],
  providers: [FormDataService],
  controllers: [FormDataController],
})
export class FormDataModule {}