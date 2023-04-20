import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    name: String;

    @IsEmail()
    @IsNotEmpty()
    email: String;

    @IsString()
    @IsNotEmpty()
    password: String;
}
