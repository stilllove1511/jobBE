import { Injectable, Inject } from '@nestjs/common'
import { CreateJobDto } from './dto/create-job.dto'
import { UpdateJobDto } from './dto/update-job.dto'
import { Job } from './job.entity'
import { Repository } from 'typeorm'

@Injectable()
export class JobService {
    constructor(
        @Inject('JOB_RESPONSITORY')
        private jobRepository: Repository<Job>,
    ) {}
    async create(job: CreateJobDto): Promise<any> {
        try {
            await this.jobRepository.insert(job)
            return {
                EC: 0,
                EM: 'create job successfully',
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'somthing wring in service',
            }
        }
    }

    async findAll() {
        try {
            let allJobs = await this.jobRepository.find()
            return {
                EC: 0,
                EM: 'Get all jobs successfully',
                DT: allJobs,
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'somthing wring in service',
            }
        }
    }

    findOne(id: number) {
        return `This action returns a #${id} job`
    }

    update(id: number, updateJobDto: UpdateJobDto) {
        return `This action updates a #${id} job`
    }

    remove(id: number) {
        return `This action removes a #${id} job`
    }
}
