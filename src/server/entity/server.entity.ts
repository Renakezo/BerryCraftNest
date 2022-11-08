import { MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('server')
export class serverEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    login: string
    @Column()
    skin: string
    @Column()
    serverID: string

}