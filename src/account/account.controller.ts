import { Body, Controller, Post } from '@nestjs/common'
import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post('register')
    async register(@Body() payload) {
        try {
            return await this.accountService.register(payload)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'error from server',
            }
        }
    }
}
