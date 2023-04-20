import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}
  async registerUser(signupDto: SignUpDto) {
    const saltOrRountds = 10;
    let { password, email } = signupDto;
    password = await bcrypt.hash(password, saltOrRountds);
    const user = await this.usersService.createUser({
      email,
      password,
      name: email.split('@')[0],
    });
    return user;
  }
  async loginUser(signinDto: SignInDto) {
    let { password, email} = signinDto;
    if (!email) {
      return { success: false, status: 400, message: 'Email required' };
    }
    
    let user = await this.usersService.findOneUser(email)
    if (!user) throw new HttpException("User not exists", HttpStatus.BAD_REQUEST); 
    if (!bcrypt.compare(password, user.password)) throw new HttpException("Password not matching", HttpStatus.BAD_REQUEST);
    const payload = { sub: user};
//     {
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxMjM0NTY3ODkiLCJzdWIiOiJjcG9NRjY0TS1ZNmRwQVI4cFpkWGgiLCJpYXQiOjE2ODE4MTYzNzQsImV4cCI6MTY4MTgyMzU3NH0.H2H-qKDZ1My_USvMnfKGVB9GUdK9ZaROSZ8WvmPz0bQ"
// }
    const token = await this.jwtService.signAsync(payload)
    return {
      user, token: token
    };
  }
}
