import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
    controllers: [],
    providers:[],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'master',
            database: 'auth',
            models: [],
            autoLoadModels:true
          }),
    ]
})
export class AppModule {
}