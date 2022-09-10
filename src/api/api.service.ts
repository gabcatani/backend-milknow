import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ApiService {

constructor(private prisma: PrismaService) {}

  async findProdToday() {

    const data = await this.prisma.$queryRaw`SELECT * FROM users`

    return data
  }

  findProdYesterday() {
    return 
  }

  findProdBestDay() {
    return 
  }

  async findCowScreenData() {

    const data = await this.prisma.$queryRaw`SELECT * FROM cows, vaccines`

    return data
  }

}
