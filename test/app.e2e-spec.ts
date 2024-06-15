/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BillingService } from '../src/billing/billing.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MembershipEntity } from '../src/membership/membership.entity';
import { Repository } from 'typeorm';
import { EmailService } from '../src/billing/email.service';

describe('BillingService', () => {
  let service: BillingService;
  let repository: Repository<MembershipEntity>;
  let emailService: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BillingService,
        EmailService,
        {
          provide: getRepositoryToken(MembershipEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BillingService>(BillingService);
    repository = module.get<Repository<MembershipEntity>>(getRepositoryToken(MembershipEntity));
    emailService = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should send email reminders for first month members', async () => {
    const memberships = [
      {
        MembershipID: '1',
        firstName: 'Chinedu',
        lastName: 'Okafor',
        membershipType: 'Annual Basic',
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
        totalAmount: 500,
        memberEmail: 'user1@yopmail.com',
        isFirstMonth: true,
      },
    ] as MembershipEntity[];

    jest.spyOn(repository, 'find').mockResolvedValueOnce(memberships);
    const sendEmailSpy = jest.spyOn(emailService, 'sendEmail').mockResolvedValueOnce();

    await service.handleCron();

    expect(sendEmailSpy).toHaveBeenCalled();
  });
});
