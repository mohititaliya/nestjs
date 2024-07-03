import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService : UserService, // this is mandantory
        private JwtService : JwtService,  
    ){} 


    async validateUser(email:string,password:string){
        const user=await this.userService.findByEmail(email);
        if(user && user.password == password){
                return user;
        }
        return null;
    }

    async login (user:any){
        const payload = {email:user.email,sub:user.Id};
        return {
            access_token : this.JwtService.sign(payload)
        }
    }
}
