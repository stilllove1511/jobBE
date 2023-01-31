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
import { UseGuards } from '@nestjs/common/decorators'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ApplicationService } from './application.service'
import { UpdateApplicationDto } from './dto/update-application.dto'

@UseGuards(JwtAuthGuard)
@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService) {}

    @Post('create')
    async create(@Body() payload, @Request() req) {
        try {
            console.log(payload)
            payload = { ...payload, user: { id: req.user.userId } }
            return await this.applicationService.create(payload)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Get()
    findAll() {
        return this.applicationService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.applicationService.findOne(+id)
    }
}
