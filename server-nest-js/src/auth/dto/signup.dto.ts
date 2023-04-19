import { IsEmail, IsNotEmpty, IsString, isString } from "class-validator";

export class SignUpDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    repassword: string;

}