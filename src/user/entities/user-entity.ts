import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({type: 'text',})
    lastname: string;

    @Column()
    age: string;

    @Column()
    idpersonal: number;

    @Column()
    street: string;
    
}