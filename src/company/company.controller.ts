import { Controller, Get, Param } from '@nestjs/common'
import { CompanyService } from './company.service'

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get(':companyId')
    async getCompanyWithJobs(@Param('companyId') companyId) {
        try {
            return await this.companyService.getCompanyWithJobs(companyId)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'error from server',
            }
        }
    }

    @Get('/search/:name')
    async searchCompany(@Param('name') companyName) {
        try {
            return await this.companyService.searchCompany(companyName)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'error from server',
            }
        }
    }
}
