import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLiterageDto } from './dto/create-literage.dto';
import { UpdateLiterageDto } from './dto/update-literage.dto';

@Injectable()
export class LiterageService {

  constructor(private prisma: PrismaService) {}

  async create(createLiterageDto: CreateLiterageDto) {

    const data = await this.prisma.literage.create({
      data: createLiterageDto
    })

    return data
  }

  async findAll() {
    
    const data = await this.prisma.literage.findMany()

    return data
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
