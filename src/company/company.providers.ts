import {
    COMPANY_RESPONSITORY,
    DATA_SOURCE,
} from 'src/common/constant/database-provider.constant'
import { DataSource } from 'typeorm'
import { Company } from './company.entity'

export const companyProviders = [
    {
        provide: COMPANY_RESPONSITORY,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Company),
        inject: [DATA_SOURCE],
    },
]
