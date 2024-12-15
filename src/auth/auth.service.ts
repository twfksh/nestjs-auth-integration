import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user: User = await this.userService.findByUsername(username);
        if (user && user.password == password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    generateToken(payload: any): string {
        return this.jwtService.sign(payload);
    }
}
