import { Module } from '@nestjs/common'
import { ApplicationService } from './application.service'
import { ApplicationController } from './application.controller'
import { DatabaseModule } from 'src/database/database.module'
import { applicationProviders } from './application.providers'

@Module({
    imports: [DatabaseModule],
    controllers: [ApplicationController],
    providers: [...applicationProviders, ApplicationService],
})
export class ApplicationModule {}
