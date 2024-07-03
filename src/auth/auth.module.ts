import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './auth.constant';
import { jwtStrategy } from './jwt.strategy';

@Module({
    controllers :[AuthController],
    imports:[UserModule,PassportModule,JwtModule.register(
       {
         secret : JwtConstants.secret,
         signOptions :{expiresIn:'60s'}
        }
    )],
    providers: [AuthService,LocalStrategy,jwtStrategy]
})
export class AuthModule {}
