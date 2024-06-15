/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipEntity } from './membership.entity';

@Controller('memberships')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  async createMembership(@Body() membership: MembershipEntity): Promise<MembershipEntity> {
    return this.membershipService.createMembership(membership);
  }

  
  @Get()
  async getAllMemberships(): Promise<MembershipEntity[]> {
    return this.membershipService.getAllMemberships();
  }
}
