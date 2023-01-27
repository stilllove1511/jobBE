import { Module } from '@nestjs/common'
import { SearchJobService } from './search-job.service'
import { SearchJobController } from './search-job.controller'
import { jobProviders } from 'src/job/job.providers'
import { DatabaseModule } from 'src/database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers: [SearchJobController],
    providers: [jobProviders[0], SearchJobService],
})
export class SearchJobModule {}
