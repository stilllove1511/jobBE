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
                EC: 0, //error code
                EM: 'create job successfully', //error message
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }

    async findAll(userId) {
        try {
            let allJobs = await this.jobRepository.find({
                where: {
                    user: {
                        id: userId,
                    },
                },
                // relations: {
                //     user: true,
                // },
                // select: {
                //     user: {
                //         id: true,
                //         username: true,
                //     },
                // },
            })
            return {
                EC: 0, //error code
                EM: 'Get all jobs successfully', //error message
                DT: allJobs, //data
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }

    async findOne(id: number) {
        try {
            let job = await this.jobRepository.findOneOrFail({
                where: { id },
                // relations: {
                //     user: true,
                // },
                // select: {
                //     user: {
                //         id: true,
                //         username: true,
                //     },
                // },
            })
            return {
                EC: 0, //error code
                EM: 'Get job successfully', //error message
                DT: job, //data
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }

    async update(payload) {
        try {
            await this.jobRepository.findOneByOrFail({
                id: payload.jobId,
                user: {
                    id: payload.userId,
                },
            })
            await this.jobRepository.save(payload.job)
            return {
                EC: 0, //error code
                EM: 'Update job successfully', //error message
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }

    async remove(payload) {
        try {
            await this.jobRepository.findOneByOrFail({
                id: payload.jobId,
                user: {
                    id: payload.userId,
                },
            })
            await this.jobRepository.delete({ id: payload.id })
            return {
                EC: 0, //error code
                EM: 'Delete job successfully', //error message
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }
}
