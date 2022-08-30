import { User } from '../../user/entities/user.entity';

export class CreateCowDto {
    id: string;
    earring: number
    breed: string
    birthDate: string
    milkmaid:    boolean
    liters:      number
    weight:      number
    inseminated: boolean
    inseminationDate: string
    forSale:     boolean
    price:       number
    sick:        boolean
    diseaseName: string 
    userId:      string
}