import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RolesCreationAttrs{
    value: string;
    description: string;
}

@Table({tableName: 'roles',createdAt: false, updatedAt: false})
export class Role extends Model<Role, RolesCreationAttrs>{

    @ApiProperty({example: '1',description:'unique id of the user'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;

    @ApiProperty({example: 'admin',description:'unique role for the users'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    value: string;

    @ApiProperty({example: 'admin - can use all functions'})
    @Column({type: DataType.STRING, defaultValue: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}