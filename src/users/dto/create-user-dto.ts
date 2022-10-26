import { ApiProperty } from "@nestjs/swagger";

export class createUseDto{
    @ApiProperty({example:'example@gmail.com', description:'email address'})
    readonly email: string;
    @ApiProperty({example:'qwerty1234', description:'password'})
    readonly password: string;
}