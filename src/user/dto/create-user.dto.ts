import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    id: string;
    
    @ApiProperty({
        description:'Name of the user',
        example: 'John',
    })
    name: string
    
    @ApiProperty()
    email: string
    
    @ApiProperty()
    password: string
}
