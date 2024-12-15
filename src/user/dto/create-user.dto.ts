import { IsAlphanumeric, IsEmail, IsIn, IsInt, IsNotEmpty, Matches, MinLength } from "class-validator";

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have at least 3 characters.' })
    @IsAlphanumeric('en-US', { message: 'Username does not allow other than alpha numeric chars.' })
    username: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Please provide a valid email address.' })
    email: string;

    @IsIn(['user', 'admin'], { message: 'Role must be either "user" or "admin"' })
    role: 'user' | 'admin';

    @IsInt()
    age: number;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character`
    })
    password: string;
}
