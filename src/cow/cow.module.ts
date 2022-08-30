import { Module } from '@nestjs/common';
import { CowService } from './cow.service';
import { CowController } from './cow.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CowController],
  providers: [CowService, PrismaService]
})
export class CowModule {}
