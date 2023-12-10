/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsDateString,
} from 'class-validator';

@Entity()
export class FormData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'Full name cannot be empty' })
  full_name: string;

  @Column()
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @Column()
  @IsPhoneNumber(null, { message: 'Invalid phone number format' })
  phone: string;

  @Column()
  @IsNotEmpty({ message: 'Company name cannot be empty' })
  company: string;

  @Column()
  @IsNotEmpty({ message: 'Interested services cannot be empty' })
  intrested_services: string;

  @Column()
  @IsNotEmpty({ message: 'Budget cannot be empty' })
  budget: string;

  @Column({ type: 'timestamp' })
  @IsDateString()
  requested_at: Date;
}

