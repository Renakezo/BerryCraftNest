import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, genSalt, hash } from 'bcryptjs';
import { userDto } from 'src/user/dto/user.dto';
import { userEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { authDto } from './dto/auth.dto';
import {v4} from 'uuid'
@Injectable()
export class AuthService {
    constructor(@InjectRepository(userEntity) private readonly userRepository: Repository<userEntity>, private readonly jwtService: JwtService) {}

    async login(dto: userDto) {
        const user = await this.validateUser(dto)

        const tokens = await this.issueTokenPair(String(user.id))

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async loginlauncher(dto: userDto) {

        const accesToken = v4()

        const user = await this.validateUser(dto)
        user.accesToken = accesToken;

        const tokens = await this.issueTokenPair(String(user.id))


        return await this.userRepository.save(user), {
            user: this.returnUserFields(user),
            ...tokens,
        }
        
    }

    async register(dto: authDto){
        const oldLogin = await this.userRepository.findOne({where: {login: dto.login}})
        const oldUser = await this.userRepository.findOne({where: {email: dto.email}})
        if(!(oldLogin == null) || !(oldUser == null)) throw new BadRequestException('User with this email or login is already in the system')

        const salt = await genSalt(10)

        const accesToken = v4()

        const newUser = this.userRepository.create({email: dto.email, login: dto.login , password: await hash(dto.password, salt), accesToken: accesToken})

        const user = await this.userRepository.save(newUser)

        const tokens = await this.issueTokenPair(String(user.id))


        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

  

    async validateUser(dto: userDto) {
        const user = await this.userRepository.findOne({where: {login: dto.login}})
        if(!user) throw new UnauthorizedException('User not found')  

        const isValidPassword = await compare(dto.password, user.password)
        if(!isValidPassword) throw new UnauthorizedException('Invalid password')

        return user
    }

    async issueTokenPair(id: string) {
        const data = {id}

        const accesToken = await this.jwtService.signAsync(data, {
            expiresIn: '10d'
        })

        return { accesToken }
    }

    returnUserFields(user: userEntity) {
        return {
            id: user.id,
            email: user.email,
            login: user.login,
            accesToken: user.accesToken
        }
    }
}
