import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from './profile/profile.module';


@Module({
    controllers : [AppController],
    imports:[UserModule,
        // connection to database
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Weenggs', 
            database: 'nestjs',
            entities: [User], // give table name at here
            synchronize: true,
          }),
          AuthModule,
          ProfileModule
    ]
})
export class AppModule {}