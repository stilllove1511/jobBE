import { DataSource } from 'typeorm'
import { Application } from './application.entity'

export const applicationProviders = [
    {
        provide: 'APPLICATION_RESPONSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Application),
        inject: ['DATA_SOURCE'],
    },
]
