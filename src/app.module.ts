import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobModule } from './job/job.module'
import { ApplicationModule } from './application/application.module'
import { SearchJobModule } from './search-job/search-job.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [JobModule, ApplicationModule, SearchJobModule, AuthModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
