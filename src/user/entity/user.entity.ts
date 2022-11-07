import { MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    email: string
    @MinLength(6, {
        message: 'Password connot be less than 6 characters!'
    })
    @Column()
    password: string
    @CreateDateColumn()
    createdDt: Date
    @UpdateDateColumn()
    updatedDt: Date
    @Column({ unique: true })
    login: string
}