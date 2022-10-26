import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({tableName: 'roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{

    @ApiProperty({example: '1',description:'unique id of the user'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;

   
    @ForeignKey(()=> Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
    
    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;

}