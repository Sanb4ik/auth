import { Model, Column, DataType, Table } from "sequelize-typescript";

interface UserCreationAttrs{
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @Column({type: DataType.STRING, unique: true, autoIncrement: true, primaryKey: true})
    id: string;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    password: string;

    @Column({type: DataType.BOOLEAN, allowNull: true})
    banReason: boolean;

}