import { Job } from 'src/job/job.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => Job, (job) => job.user)
    jobs: Job[]
}
