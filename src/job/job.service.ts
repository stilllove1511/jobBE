import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateJobDto } from './dto/create-job.dto'
import { UpdateJobDto } from './dto/update-job.dto'
import { Job } from './entities/job.entity'
import { Repository } from 'typeorm'

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(Job)
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

    findAll() {
        return `This action returns all job`
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
