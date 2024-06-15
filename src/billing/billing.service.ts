/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipEntity } from '../membership/membership.entity';
import { EmailService } from './email.service';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly membershipRepository: Repository<MembershipEntity>,
    private readonly emailService: EmailService,
  ) {}
  @Cron('* * * * * *')  // for seconds
  //  @Cron('0 0 * * *') // for every night
  async handleCron() {
    const memberships = await this.membershipRepository.find();
    const now = new Date();
    // console.log(now, memberships)

    const emailPromises = memberships.map(async (membership) => {
      // console.log(membership)
      if (membership.isFirstMonth) {
        // console.log(membership.isFirstMonth)
        const reminderDate = new Date(membership.dueDate);
        // console.log(reminderDate)

        reminderDate.setDate(reminderDate.getDate() - 7);


        if (now >= reminderDate && now < membership.dueDate) {
          // console.log(membership)
          return this.sendEmail(membership, true);
        }
      } else {
        const dueDate = new Date(membership.dueDate);
        if (now.getMonth() === dueDate.getMonth() && now.getFullYear() === dueDate.getFullYear()) {
          return this.sendEmail(membership, false);
        }
      }
      return null;
    });
// console.log(await Promise.all(emailPromises))
    // await Promise.all(emailPromises);

const results = await Promise.all(emailPromises);
    console.log(results.filter(result => result !== null)); // Log non-null results
    return results;
  }

  private async sendEmail(membership: MembershipEntity, isFirstMonth: boolean): Promise<string> {
    const subject = `Fitness+ Membership Reminder - ${membership.membershipType}`;
    const body = isFirstMonth
      ? `Reminder: Your annual membership fee and first month's add-on service charges are due soon. Here is your invoice: https://`
      : `Reminder: Your monthly add-on service charges are due soon. Here is your invoice: https://`;

    await this.emailService.sendEmail(membership.memberEmail, subject, body);
    return `Email sent to ${membership.memberEmail}`;
  }
}
