import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Request,
} from '@nestjs/common'
import { JobService } from './job.service'
import { CreateJobDto } from './dto/create-job.dto'
import { UpdateJobDto } from './dto/update-job.dto'
import { UseGuards } from '@nestjs/common/decorators'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { User } from 'src/user/user.entity'

@UseGuards(JwtAuthGuard)
@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    @Post('create')
    async create(@Body() job: CreateJobDto, @Request() req) {
        try {
            job = { ...job, user: { id: req.user.userId } }
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
    async findAll(@Request() req) {
        try {
            return await this.jobService.findAll(req.user.userId)
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
    async update(@Param('id') id: string, @Body() job: any, @Request() req) {
        try {
            job.id = +id
            return await this.jobService.update({
                job,
                userId: req.user.userId,
                jobId: +id,
            })
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string, @Request() req) {
        try {
            return await this.jobService.remove({
                jobId: +id,
                userId: req.user.userId,
            })
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }
}
