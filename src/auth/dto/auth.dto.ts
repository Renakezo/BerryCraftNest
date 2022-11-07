import { IsEmail, IsString, MinLength } from "class-validator"
import { Column } from "typeorm"

export class authDto {
    @IsEmail()
    email: string

    @MinLength(4, {
        message: 'Login connot be less than 4 characters!'
    })
    @Column()
    login: string
    
    @MinLength(6, {
        message: 'Password connot be less than 6 characters!'
    })
    @IsString()
    password: string

    @Column()
    accesToken: string
}
