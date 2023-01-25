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
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Get()
    async findAll() {
        try {
            return await this.jobService.findAll()
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        try {
            return await this.jobService.findOne(+id)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() job: any) {
        try {
            job.id = +id
            return await this.jobService.update(job)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        try {
            return await this.jobService.remove(+id)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }
}
