/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipEntity } from './membership.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly membershipRepository: Repository<MembershipEntity>,
  ) {}

  async createMembership(membership: MembershipEntity): Promise<MembershipEntity> {
    return await this.membershipRepository.save(membership);
  }

  async getAllMemberships(): Promise<MembershipEntity[]> {
    return await this.membershipRepository.find();
  }
}
