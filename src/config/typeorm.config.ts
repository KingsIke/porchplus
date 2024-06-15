/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MembershipEntity } from '../membership/membership.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "453622Ike",
  database: "porchplus",
  entities: [__dirname + '/../**/*.entity{.ts,.js}',MembershipEntity],
  synchronize: false,
};
