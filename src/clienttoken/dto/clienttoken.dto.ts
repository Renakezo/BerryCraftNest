
import { Column } from "typeorm"

export class clientDto {
    @Column()
    id: number
    
    @Column()
    accesToken: string
    
    @Column()
    serverID: number
}
