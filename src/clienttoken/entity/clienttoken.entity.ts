import { MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clienttoken')
export class clientEntity {
    @PrimaryColumn()
    id: number
    @Column()
    accesToken: string
    @Column()
    serverID: number
}