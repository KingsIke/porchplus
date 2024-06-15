/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('trigger')
  async triggerBillingProcess() {
    await this.billingService.handleCron();
    // console.log(await this.billingService.handleCron())
    return { message: 'Billing process triggered' };
  }
}
