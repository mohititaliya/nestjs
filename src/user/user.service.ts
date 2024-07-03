import { Injectable, Param } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/Update-user.dto';
import { CreateUserDto } from './dto/Create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
    ){}

    get():Promise<User []>{  // give here promise because database take time to do operation complate
        // return {name:'mohit1',email:"mohititaliya@gmail.com"};
        return this.userRepository.find() // this is used to fetch data from database
    }

    Create(CreateUserDto:CreateUserDto){
        return this.userRepository.save(CreateUserDto);
    }

    Update(upadateUserDto:UpdateUserDto
        ,userId:number){
        return this.userRepository.update(userId,upadateUserDto)
    }    

    show(id:number){
        return this.userRepository.findOne({where:{id}}) // its similar as select * from user where id=userId
    }

    findByEmail(email:string){
        return this.userRepository.findOne({where :{email}})
    }

    delete(userId:number){
        return this.userRepository.delete(userId);
    }
}
