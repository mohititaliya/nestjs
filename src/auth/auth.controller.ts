import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {

    constructor(private AuthService : AuthService){}
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req:any){
            // return this.AuthService.validateUser(loginDto.email,loginDto.password)
            return this.AuthService.login(req.user);
    }

}
