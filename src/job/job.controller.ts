import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { JobService } from './job.service'
import { CreateJobDto } from './dto/create-job.dto'
import { UpdateJobDto } from './dto/update-job.dto'

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    @Post('create')
    async create(@Body() job: CreateJobDto) {
        try {
            return await this.jobService.create(job)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'Error from server',
            }
        }
    }

    @Get()
    findAll() {
        return this.jobService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.jobService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        return this.jobService.update(+id, updateJobDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.jobService.remove(+id)
    }
}
