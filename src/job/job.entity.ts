import { User } from 'src/users/user.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'

@Entity('job')
export class Job {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.jobs)
    user: User
}
