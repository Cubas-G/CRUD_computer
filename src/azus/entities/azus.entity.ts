import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Azus {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({type: 'text',})
    GraphicCard: string;
    
    @Column({type: 'text',})
    processor: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    color: string;
    
}