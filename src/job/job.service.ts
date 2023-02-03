import { Injectable, Inject } from '@nestjs/common'
import { Job } from './job.entity'
import { Repository } from 'typeorm'
import {
    JOB_RESPONSITORY,
    USER_RESPONSITORY,
} from 'src/common/constant/database-provider.constant'
import { User } from 'src/user/user.entity'

@Injectable()
export class JobService {
    constructor(
        @Inject(JOB_RESPONSITORY)
        private jobRepository: Repository<Job>,
        @Inject(USER_RESPONSITORY)
        private userRepository: Repository<User>,
    ) {}

    async create(payload): Promise<any> {
        try {
            let userWithCompany = await this.userRepository.findOneOrFail({
                where: { id: payload.user.userId },
                relations: {
                    company: true,
                },
            })
            let userCompany = userWithCompany.company //get user company

            console.log(userCompany)

            await this.jobRepository.insert({
                ...payload.job,
                // skills: JSON.stringify(payload.job.skills),
                company: userCompany,
            })
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

    // async findAll(userId) {
    //     try {
    //         let allJobs = await this.jobRepository.find({
    //             where: {
    //                 user: {
    //                     id: userId,
    //                 },
    //             },
    //             // relations: {
    //             //     user: true,
    //             // },
    //             // select: {
    //             //     user: {
    //             //         id: true,
    //             //         username: true,
    //             //     },
    //             // },
    //         })
    //         return {
    //             EC: 0, //error code
    //             EM: 'Get all jobs successfully', //error message
    //             DT: allJobs, //data
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         return {
    //             EC: 1, //error code
    //             EM: 'somthing wring in service', //error message
    //         }
    //     }
    // }

    async findOne(id: number) {
        try {
            let job = await this.jobRepository.findOneOrFail({
                where: { id },
                relations: {
                    company: true,
                },
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
                // DT: { ...job, skills: JSON.parse(job.skills) }, //data
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
            let userWithCompany = await this.userRepository.findOneOrFail({
                where: { id: payload.user.userId },
                relations: {
                    company: true,
                },
            })
            let userCompany = userWithCompany.company //get user company

            //check if user company and company of job is the same
            await this.jobRepository.findOneByOrFail({
                id: payload.jobId,
                company: {
                    id: userCompany.id,
                },
            })

            // payload.user.id = payload.user.userId
            await this.jobRepository.save(payload)
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
            let userWithCompany = await this.userRepository.findOneOrFail({
                where: { id: payload.user.userId },
                relations: {
                    company: true,
                },
            })
            let userCompany = userWithCompany.company //get user company

            //check if user company and company of job is the same
            await this.jobRepository.findOneByOrFail({
                id: payload.jobId,
                company: {
                    id: userCompany.id,
                },
            })
            await this.jobRepository.delete({ id: payload.jobId })
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
