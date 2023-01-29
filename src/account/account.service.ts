import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/user/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AccountService {
    constructor(
        @Inject('USER_RESPONSITORY')
        private userResponsitory: Repository<User>,
    ) {}

    async register(payload) {
        try {
            let isUsernameExist = await this.userResponsitory.findOneBy({
                username: payload.username,
            })
            if (isUsernameExist)
                return {
                    EC: 1,
                    EM: 'username has beeen existed',
                }
            await this.userResponsitory.insert(payload)
            return {
                EC: 0,
                EM: 'create account succesfully',
            }
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'some thing wrong in service',
            }
        }
    }
}
