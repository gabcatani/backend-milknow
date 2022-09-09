import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [VaccineController],
  providers: [VaccineService, PrismaService]
})
export class VaccineModule {}
