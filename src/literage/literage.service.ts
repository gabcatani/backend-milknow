import { Injectable } from '@nestjs/common';
import { CreateLiterageDto } from './dto/create-literage.dto';
import { UpdateLiterageDto } from './dto/update-literage.dto';

@Injectable()
export class LiterageService {
  create(createLiterageDto: CreateLiterageDto) {
    return 'This action adds a new literage';
  }

  findAll() {
    return `This action returns all literage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} literage`;
  }

  update(id: number, updateLiterageDto: UpdateLiterageDto) {
    return `This action updates a #${id} literage`;
  }

  remove(id: number) {
    return `This action removes a #${id} literage`;
  }
}
