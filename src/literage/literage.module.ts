import { Module } from '@nestjs/common';
import { LiterageService } from './literage.service';
import { LiterageController } from './literage.controller';

@Module({
  controllers: [LiterageController],
  providers: [LiterageService]
})
export class LiterageModule {}
