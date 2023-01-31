import { Injectable, Inject } from '@nestjs/common'
import { COMPANY_RESPONSITORY } from 'src/common/constant/database-provider.constant'
import { Like, Repository } from 'typeorm'
import { Company } from './company.entity'

@Injectable()
export class CompanyService {
    constructor(
        @Inject(COMPANY_RESPONSITORY)
        private companyRepository: Repository<Company>,
    ) {}

    async getCompanyWithJobs(payload) {
        try {
            let company = await this.companyRepository.findOneOrFail({
                where: {
                    id: payload.companyId,
                },
                relations: {
                    jobs: true,
                },
            })

            return {
                EC: 0,
                EM: 'get company with jobs successfully',
                DT: company,
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'something wrong in service', //error message
            }
        }
    }

    async searchCompany(companyName) {
        try {
            let result = await this.companyRepository.find({
                where: {
                    name: Like(`%${companyName}%`),
                },
            })

            return {
                EC: 0,
                EM: 'here is our result',
                DT: result,
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'something wrong in service', //error message
            }
        }
    }
}
