import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['intern', 'dev', 'admin'], { message: 'role tidak valid' })
  role: 'intern' | 'dev' | 'admin';
}
