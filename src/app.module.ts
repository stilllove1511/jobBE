import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Job } from './job/entities/job.entity'
import { JobModule } from './job/job.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: '1',
            database: 'job',
            entities: [Job],
            synchronize: true,
        }),
        JobModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
