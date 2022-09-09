import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';

@Injectable()
export class VaccineService {

  constructor(private prisma: PrismaService) {}
  
  async create(createVaccineDto: CreateVaccineDto) {

    const vaccineExists = await this.prisma.vaccines.findFirst({
      where: {
        name: createVaccineDto.name,
      }    
    })

    if (vaccineExists) {
      throw new Error('Vaccine already exists');
    }

    const vaccine = await this.prisma.vaccines.create({
      data: createVaccineDto
    });

    return vaccine;
  }

  async findAll() {
    const vaccines = await this.prisma.vaccines.findMany();
    return vaccines;
  }

  async findOne(id: string) {

    const vaccine = await this.prisma.vaccines.findUnique({
      where: { 
        id: id 
      }
    })
    console.log(vaccine);
    return vaccine;
  }

  update(id: number, updateVaccineDto: UpdateVaccineDto) {
    return `This action updates a #${id} vaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccine`;
  }
}
