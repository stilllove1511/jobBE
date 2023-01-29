import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('application')
export class Application {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    job_id: number

    @Column()
    advantages: string

    @Column()
    CV_URL: string
}
