import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobModule } from './job/job.module'
import { ApplicationModule } from './application/application.module'
import { SearchJobModule } from './search-job/search-job.module'

@Module({
    imports: [JobModule, ApplicationModule, SearchJobModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
