import { Module } from '@nestjs/common';
import { LiterageService } from './literage.service';
import { LiterageController } from './literage.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [LiterageController],
  providers: [LiterageService, PrismaService]
})
export class LiterageModule {}
