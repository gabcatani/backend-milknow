import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CowModule } from './cow/cow.module';
import { ApiModule } from './api/api.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiterageModule } from './literage/literage.module';
import { FoodModule } from './food/food.module';


@Module({
  imports: [UserModule, CowModule, ApiModule, VaccineModule, LiterageModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
