/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'memberships' })
export class MembershipEntity {
  @PrimaryGeneratedColumn()
  MembershipID: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  membershipType: string;

  @Column()
  startDate: Date;

  @Column()
  dueDate: Date;

  @Column()
  totalAmount: number;

  @Column()
  memberEmail: string;

  @Column()
  isFirstMonth: boolean;
}
