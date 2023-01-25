import { Injectable, Inject } from '@nestjs/common'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'
import { Repository } from 'typeorm'
import { Application } from './application.entity'

@Injectable()
export class ApplicationService {
    constructor(
        @Inject('APPLICATION_RESPONSITORY')
        private applicationRepository: Repository<Application>,
    ) {}

    async create(application: CreateApplicationDto) {
        try {
            await this.applicationRepository.insert(application)
            return {
                EC: 0, //error code
                EM: 'apply for the job successfully', //error message
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'somthing wring in service', //error message
            }
        }
    }

    findAll() {
        return `This action returns all application`
    }

    findOne(id: number) {
        return `This action returns a #${id} application`
    }

    update(id: number, updateApplicationDto: UpdateApplicationDto) {
        return `This action updates a #${id} application`
    }

    remove(id: number) {
        return `This action removes a #${id} application`
    }
}
