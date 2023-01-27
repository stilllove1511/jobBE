import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Job } from '../job/job.entity'

@Injectable()
export class SearchJobService {
    constructor(
        @Inject('JOB_RESPONSITORY')
        private jobRepository: Repository<Job>,
    ) {}

    async search(title) {
        try {
            let jobs = await this.jobRepository.findBy({ title })
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
