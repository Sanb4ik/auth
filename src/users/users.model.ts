import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs{
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: '1',description:'unique id of the user'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;

    @ApiProperty({example: 'example@gmail.com',description:'unique email of the user'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @ApiProperty({example: 'qwerty1234',description:'password of the user'})
    @Column({type: DataType.STRING, defaultValue: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}