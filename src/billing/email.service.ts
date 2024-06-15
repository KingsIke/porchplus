/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

console.log(process.env.EMAIL_USER)

@Injectable()
export class EmailService {

  private transporter: nodemailer.Transporter;;

  constructor() {
dotenv.config();

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
     host:"smtp.gmail.com",
     port:587,
     secure:false,
      auth: {
       
        user: "kingsworksproject",
        pass: "qhcfrmzvoolsjmld",
        
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
