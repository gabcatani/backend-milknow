import { PartialType } from '@nestjs/swagger';
import { CreateLiterageDto } from './create-literage.dto';

export class UpdateLiterageDto extends PartialType(CreateLiterageDto) {}
