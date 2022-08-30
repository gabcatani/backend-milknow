import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {

    const userExists = await this.prisma.user.findFirst({ 
      where: {
        email: createUserDto.email
      }
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password
      }
    });
    return user
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string) {

    const user = await this.prisma.user.findUnique({ 
      where:{
        id: id 
      }
    });
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
      
      const user = await this.prisma.user.update({
        where: {
          id: id
        },
        data: {
          name: updateUserDto.name,
          email: updateUserDto.email,
          password: updateUserDto.password
        }
      })
      return user
  }

  async remove(id: string) {

    const user = await this.prisma.user.delete({
      where: {
        id: id
      }
    })
    return `O usuário ${id} foi deletado com sucesso;` 
  }
}
