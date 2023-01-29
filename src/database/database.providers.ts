import { DATA_SOURCE } from 'src/common/constant/database-provider.constant'
import { DataSource } from 'typeorm'

export const databaseProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: '1',
                database: 'job',
                entities: [__dirname + '/../**/*.entity.{ts,js}'],
                synchronize: true,
            })

            return dataSource.initialize()
        },
    },
]
