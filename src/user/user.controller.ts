import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/Update-user.dto';
import { CreateUserDto } from './dto/Create-user.dto';

@Controller('user')

export class UserController {
    constructor(private UserService:UserService){} 
    @Get()
    getUsers(){
        return this.UserService.get();
        // return {name:'mohit1',email:"mohititaliya@gmail.com"};
    } 

    @Post()
    store(@Body() CreateUserDto:CreateUserDto){
        return this.UserService.Create(CreateUserDto);
        // return "i am storing data into database";
        // return req;
    }

    @Patch('/:userId')
    update(@Body() upadateUserDto:UpdateUserDto,@Param('userId',ParseIntPipe) userId:number){
        // return "i am storing data into database";
        // return req;
        return this.UserService.Update(upadateUserDto,userId)
    }

    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId:number){ //parseintpipe is used to validate params input
        // return Param;
        return this.UserService.show(userId)
    }

    @Delete('/:userId')
    deleteUser(@Param('userId',ParseIntPipe) userId:number){
        // return params;
        return this.UserService.delete(userId);
    }
}
