import { CreateCowDto } from "src/cow/dto/create-cow.dto"

export class CreateVaccineDto {
    name: string
    date: string
    cow_id: string
}
