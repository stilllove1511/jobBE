import { DataSource } from 'typeorm'
import { Application } from './application.entity'
import {
    APPLICATION_RESPONSITORY,
    DATA_SOURCE,
} from 'src/common/constant/database-provider.constant'

export const applicationProviders = [
    {
        provide: APPLICATION_RESPONSITORY,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Application),
        inject: [DATA_SOURCE],
    },
]
