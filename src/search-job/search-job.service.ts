import { Inject, Injectable } from '@nestjs/common'
import { Like, Repository } from 'typeorm'
import { Job } from '../job/job.entity'

@Injectable()
export class SearchJobService {
    constructor(
        @Inject('JOB_RESPONSITORY')
        private jobRepository: Repository<Job>,
    ) {}

    async search(query) {
        try {
            let jobs = await this.jobRepository.find({
                where: {
                    title: query.title ? Like(`%${query.title}%`) : null,
                    skills: query.skills ? Like(`%${query.skills}%`) : null,
                    address: query.address ? Like(`%${query.address}%`) : null,
                },
                relations: {
                    company: true,
                },
            })
            return {
                EC: 0, //error code
                EM: 'here is our result', //error message
                DT: jobs, //data
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
