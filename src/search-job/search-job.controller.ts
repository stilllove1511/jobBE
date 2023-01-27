import { Controller, Get, Param } from '@nestjs/common'
import { SearchJobService } from './search-job.service'

@Controller('search-job')
export class SearchJobController {
    constructor(private readonly searchJobService: SearchJobService) {}

    @Get(':title')
    async search(@Param() param) {
        try {
            return await this.searchJobService.search(param.title)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'error from server',
            }
        }
    }
}
