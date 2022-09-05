import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCowDto } from './dto/create-cow.dto';
import { UpdateCowDto } from './dto/update-cow.dto';

@Injectable()
export class CowService {

  constructor(private prisma: PrismaService) {}

  async create(createCowDto: CreateCowDto) {
    const cowExists = await this.prisma.cow.findFirst({
      where: {
        earring: createCowDto.earring
      }
    });

    if (cowExists) {
      throw new Error('Cow already exists');
    }

    const cow = await this.prisma.cow.create({
      data: createCowDto
    })
    return cow
}

  findAll() {
    const cow = this.prisma.cow.findMany();
    return cow
  }

  findOne(id: string) {
    const cow = this.prisma.cow.findFirst({
      where: {
        id
      }
  });
    return cow;
  }

  update(id: string, updateCowDto: UpdateCowDto) {
    const cow = this.prisma.cow.update({
      where: {
        id
      },
      data: {

      }
    })
    return cow
  }

  remove(id: string) {
    const cow = this.prisma.cow.delete({
      where: {
        id
      }
    });
    return `This action removes a #${id} cow`;
  }
}
