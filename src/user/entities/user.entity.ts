import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 36, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 56, unique: true })
    email: string;

    @Column({ type: 'enum', enum: ['user', 'admin'], default: 'user' })
    role: 'user' | 'admin';

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'varchar' })
    password: string;
}