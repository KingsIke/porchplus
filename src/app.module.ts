/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipModule } from './membership/membership.module';
// import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config/dist';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingService } from './billing/billing.service';
import { EmailService } from './billing/email.service';
import { BillingController } from './billing/billing.controller';
// import { MembershipEntity } from './membership/membership.entity';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),

    MembershipModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [BillingController],
  providers: [BillingService, EmailService],
})
export class AppModule {}
