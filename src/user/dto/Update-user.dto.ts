import { IsEmail, IsString, isString,} from "class-validator";

export class UpdateUserDto{
    @IsString()
    name : string; 
    
    @IsEmail()
    email:string;

    @IsString()
    password:string;
}