/* eslint-disable prettier/prettier */
import { FormData } from 'src/formData.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(FormData)
export class FormDataRepository extends Repository<FormData> {}
