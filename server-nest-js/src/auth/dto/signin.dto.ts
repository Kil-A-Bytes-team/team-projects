import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { SignUpDto } from "./signup.dto";

export class SignInDto extends PartialType(SignUpDto) {
    id: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;

    
    @IsString()
    @IsNotEmpty()
    password: string;

}