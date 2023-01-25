import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobModule } from './job/job.module'
import { ApplicationModule } from './application/application.module'

@Module({
    imports: [JobModule, ApplicationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
