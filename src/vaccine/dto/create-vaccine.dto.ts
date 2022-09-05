import { CreateCowDto } from "src/cow/dto/create-cow.dto"

export class CreateVaccineDto {
    id: string
    name: string
    date: string
    cow: CreateCowDto
}
