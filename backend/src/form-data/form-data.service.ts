import { Injectable } from '@nestjs/common';
import { FormData } from 'src/formData.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FormDataDto } from './DTO/form-data.dto';
import { FormDataRepository } from './form-data.repository';

@Injectable()
export class FormDataService {
  constructor(
    @InjectRepository(FormData)
    private formRepository: FormDataRepository,
  ) {}

  async create(formData: FormDataDto): Promise<FormDataDto> {
    const form = this.formRepository.create(formData);
    await this.formRepository.save(form);
    return formData;
  }
}
