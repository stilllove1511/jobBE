import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobModule } from './job/job.module'
import { ApplicationModule } from './application/application.module'
import { SearchJobModule } from './search-job/search-job.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { AccountModule } from './account/account.module'
import { CompanyModule } from './company/company.module'

@Module({
    imports: [
        JobModule,
        ApplicationModule,
        SearchJobModule,
        AuthModule,
        UserModule,
        AccountModule,
        CompanyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
