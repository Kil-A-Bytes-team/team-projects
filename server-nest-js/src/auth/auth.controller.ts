import { Controller, Get, Post, Body, UseGuards, Request, HttpStatus, Response } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signupDto: SignUpDto) {
    return this.authService.registerUser(signupDto);
  }
  @Post('signin')
  signin(@Body() signinDto: SignInDto) {
    return this.authService.loginUser(signinDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Response() res, @Request() req ) {
    return res.status(HttpStatus.OK).json(req.user);
    
  }
}
