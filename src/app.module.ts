import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CowModule } from './cow/cow.module';
import { ApiModule } from './api/api.module';
import { VaccineModule } from './vaccine/vaccine.module';


@Module({
  imports: [UserModule, CowModule, ApiModule, VaccineModule],
  controllers: [],
  providers: []
})
export class AppModule {}
