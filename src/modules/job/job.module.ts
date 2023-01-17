import { Module } from '@nestjs/common'
import { JobService } from './job.service'
import { JobController } from './job.controller'
import { DatabaseModule } from 'src/database/database.module'
import { jobProviders } from './job.providers'

@Module({
    imports: [DatabaseModule],
    controllers: [JobController],
    providers: [...jobProviders, JobService],
})
export class JobModule {}
