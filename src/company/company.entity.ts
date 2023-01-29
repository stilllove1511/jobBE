import { Job } from 'src/job/job.entity'
import { User } from 'src/user/user.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'

@Entity('company')
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => User, (user) => user.company)
    users: User[]

    @OneToMany(() => Job, (job) => job.company)
    jobs: Job[]
}
