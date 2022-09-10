import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiterageService } from './literage.service';
import { CreateLiterageDto } from './dto/create-literage.dto';
import { UpdateLiterageDto } from './dto/update-literage.dto';

@Controller('literage')
export class LiterageController {
  constructor(private readonly literageService: LiterageService) {}

  @Post()
  create(@Body() createLiterageDto: CreateLiterageDto) {
    return this.literageService.create(createLiterageDto);
  }

  @Get()
  findAll() {
    return this.literageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.literageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiterageDto: UpdateLiterageDto) {
    return this.literageService.update(+id, updateLiterageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literageService.remove(+id);
  }
}
