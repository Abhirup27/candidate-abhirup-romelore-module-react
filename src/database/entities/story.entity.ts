import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UUID} from "node:crypto";

@Entity()
export class Story {
    @PrimaryGeneratedColumn('uuid')
    id!: UUID;

    @Column({ unique: false, nullable: false })

    title!: string;

    @Column({nullable: false})
    author!: string;
    @Column({nullable: true})
    excerpt?: string;
    @Column({nullable: false, type: 'text'})
    content!: string;
    @Column({nullable: true, type: 'text'})
    image!: string;
    @Column({nullable: true})
    category!: string;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    date?: Date;

    // @OneToMany(() => Collaboration, collaboration => collaboration.user)
    // collaborations: Collaboration[];
}