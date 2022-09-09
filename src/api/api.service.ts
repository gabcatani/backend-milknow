import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ApiService {

constructor(private prisma: PrismaService) {}

  async findProdToday() {

    const result = await this.prisma.$queryRaw`SELECT * FROM users`

    return result
  }

  findProdYesterday() {
    return 
  }

  findProdBestDay() {
    return 
  }

}
