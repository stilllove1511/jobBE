import { Application } from 'src/application/application.entity'
import { Company } from 'src/company/company.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    BeforeInsert,
    AfterLoad,
    VirtualColumn,
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

    @Column('simple-array', { nullable: true })
    skills: string[]

    @ManyToOne(() => Company, (company) => company.jobs)
    company: Company

    @OneToMany(() => Application, (application) => application.job)
    applications: Application[]
}
