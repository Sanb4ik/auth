import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{
    @ApiProperty({example:'USER/ADMIN', description:'roles'})
    readonly value: string;
    @ApiProperty({example:'he looks like god'})
    readonly description: string;
}