import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { createUseDto } from './dto/create-user-dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService)
    {}
    async createUser(dto: createUseDto){
        const user = await this.userRepository.create(dto)
        const role = await this.rolesService.getRoleByValue("USER");
        user.$set('roles',[role.id])
        return user;
    }
    
    async getAllUsers(){
        const users = await this.userRepository.findAll({include:{all: true}})
        return users;
    }
}
