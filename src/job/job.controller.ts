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
import { UseGuards } from '@nestjs/common/decorators'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() job: CreateJobDto, @Request() req) {
        try {
            let payload = { job, user: { userId: req.user.userId } }
            return await this.jobService.create(payload)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    // @Get()
    // async findAll(@Request() req) {
    //     try {
    //         return await this.jobService.findAll(req.user.userId)
    //     } catch (error) {
    //         console.log(error)
    //         return {
    //             EC: 1, //error code
    //             EM: 'Error from server', //error message
    //         }
    //     }
    // }

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

    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() job: any, @Request() req) {
        try {
            job.id = +id
            return await this.jobService.update({
                ...job,
                user: {
                    userId: req.user.userId,
                },
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

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async remove(@Param('id') id: string, @Request() req) {
        try {
            return await this.jobService.remove({
                jobId: +id,
                user: {
                    userId: req.user.userId,
                },
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
