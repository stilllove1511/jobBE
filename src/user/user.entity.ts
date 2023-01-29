import { Company } from 'src/company/company.entity'
import { Job } from 'src/job/job.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'

@Entity('userType')
export class UserType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @OneToMany(() => User, (user) => user.type)
    users: User[]
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @ManyToOne(() => UserType, (type) => type.users)
    type: UserType

    @ManyToOne(() => Company, (company) => company.users)
    company: Company
}
