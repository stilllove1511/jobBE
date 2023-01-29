import { Company } from 'src/company/company.entity'
import { User } from 'src/user/user.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm'

@Entity('job')
export class Job {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    salary: number

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    job_type: string

    @Column({ nullable: true })
    duration: Date

    @Column({ nullable: true })
    description: string

    @ManyToOne(() => Company, (company) => company.jobs)
    company: Company

    @Column()
    skills: string
}
