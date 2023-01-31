import { Job } from 'src/job/job.entity'
import { User } from 'src/user/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity('application')
export class Application {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    intro: string

    @Column()
    CV_URL: string

    @ManyToOne(() => Job, (job) => job.applications)
    job: Job

    @ManyToOne(() => User, (user) => user.applications)
    user: User
}
