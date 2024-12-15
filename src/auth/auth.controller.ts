import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    login(@Request() req): string {
        return this.authService.generateToken(req.user);
    }
}
