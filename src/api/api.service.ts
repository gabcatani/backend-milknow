import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ApiService {

constructor(private prisma: PrismaService) {}

  async findProdToday() {
    
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth()+1).toString();; // Months start at 0!
    let dd = today.getDate().toString();

    if (parseInt(dd) < 10) dd = '0' + dd;
    if (parseInt(mm) < 10) mm = '0' + mm;

    const date = dd + '/' + mm + '/' + yyyy;

    const data = await this.prisma.$queryRaw`SELECT * FROM literage where date = ${date}`;

    return data
  }

  async findProdYesterday() {
    
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth()+1).toString();; // Months start at 0!
    let dd = (today.getDate()-1).toString();

    if (parseInt(dd) < 10) dd = '0' + dd;
    if (parseInt(mm) < 10) mm = '0' + mm;

    const date = dd + '/' + mm + '/' + yyyy;

    const data = await this.prisma.$queryRaw`SELECT * FROM literage where date = ${date}`;

    return data
  }

  async findProdBestDay() {

    const data = await this.prisma.$queryRaw`select * from literage ORDER BY litres DESC limit 1`

    return data 
  }

  async findCowScreenData() {

    const data = await this.prisma.$queryRaw`select * from cows c INNER join vaccines v  ON v.cow_id = c.id;`

    return data
  }

}
