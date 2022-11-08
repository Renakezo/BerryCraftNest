import { IsEmail, IsString, MinLength } from "class-validator"
import { Column } from "typeorm"

export class userDto {
    login: string

    @IsString()
    @MinLength(6, {
        message: 'Password connot be less than 6 characters!'
    })
    password: string 

    serverID: string
}