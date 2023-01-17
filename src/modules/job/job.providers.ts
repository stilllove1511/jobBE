import { DataSource } from 'typeorm'
import { Job } from './job.entity'

export const jobProviders = [
    {
        provide: 'JOB_RESPONSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Job),
        inject: ['DATA_SOURCE'],
    },
]
