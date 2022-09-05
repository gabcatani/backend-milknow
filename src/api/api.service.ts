import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ApiService {

constructor(private prisma: PrismaService) {}

  async findProdToday() {
    const queryResult = await this.prisma.$queryRaw`SELECT * from Users `
    return
  }

  findProdYesterday() {
    return 
  }

  findProdBestDay() {
    return 
  }

}
