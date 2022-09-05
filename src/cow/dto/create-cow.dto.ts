import { CreateVaccineDto } from 'src/vaccine/dto/create-vaccine.dto'
import  { CreateUserDto }  from '../../user/dto/create-user.dto'
export class CreateCowDto {
    id: string
    earring: number
    breed: string
    birthDate: string
    milkmaid: boolean
    weight: number
    forSale: boolean
    user: CreateUserDto
    vaccines: CreateVaccineDto
}