import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiService } from './api.service';

@ApiTags('SQL Querys')
@Controller('api')
export class ApiController {

  constructor(private readonly apiService: ApiService) {}

  @Get('productiontoday')
  findProdToday() {
    return this.apiService.findProdToday();
  }

  @Get('productionyesterday')
  findProdYesterday() {
    return this.apiService.findProdYesterday();
  }

  @Get('productionbestday')
  findProdBestDay() {
    return this.apiService.findProdBestDay();
  }

  @Get('cowscreen')
  findCowScreenData() {
    return this.apiService.findCowScreenData();
  }

}
