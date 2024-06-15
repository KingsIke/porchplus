# PorchPlus Membership Mail Management System
Fitness+ offers gym memberships with various billing structures and optional add-on services. This backend system is designed to manage memberships, send email reminders for upcoming fees, and handle different billing scenarios..

# Table of Contents
• Features
• Prerequisites
• Installation
• Running the Application
• Project Structure
• Technologies Used
• API Endpoints
• Cron Job Implementation
• Email Functionality
• Testing
• Deployment
• Contact

# Features
• Manage gym memberships with annual and monthly billing options.
• Handle optional add-on services with separate monthly charges.
• Combine the annual membership fee with the first month's add-on services charges for new members.
• Send email reminders for upcoming membership fees and monthly add-on charges.
• Cron job to periodically check for upcoming membership fees and send reminders.

# Prerequisites
• Node.js (v14.x or later)
• npm 
• PostgreSQL
• Gmail account (for sending emails)



# Installation
## Backend (NestJS)
Clone the repository:

```JavaScript
Copy code
git clone https://github.com/yourusername/porchplus.git

cd porchplus
Install dependencies:  npm install
Configure environment variables: Create a .env file in the root directory and add the following:

env
Copy code
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=yourusername
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=yourdatabase
Run database migrations:

npm run typeorm -- migration:run
```

# Backend
## Start the NestJS server:

```JavaScript
npm run start:dev
The server will run on http://localhost:3000.

```


Project Structure

```JavaScript
porchplus/
├── src/
│   ├── membership/
│   ├── billing/
│   ├── app.module.ts
│   └── config/typeorm.config.ts
│   └── main.ts
├── .test
├── .env
├── package.json
└── tsconfig.json
```
# Technologies Used

# Backend
• NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
• TypeScript: A statically typed superset of JavaScript.
• TypeORM: An ORM for TypeScript and JavaScript.
• Nodemailer: A module for Node.js applications to send emails.

# Cron Job Implementation
The cron job runs periodically to check for upcoming membership fees and send reminders.

# Logic
## • New Members (First Month):

• Calculate the reminder date based on the annual membership due date.
• Send an email reminder with the combined annual fee and first month's add-on service charges.
## • Existing Members (Subsequent Months):

• Check if the current date falls within the month for the add-on service.
• Send an email reminder with the service name, monthly amount, and a link to the invoice.

# Cron Job Configuration
The cron job is configured to run daily to check for upcoming fees and send reminders.

# Email Functionality
Emails are sent using Nodemailer with a Gmail SMTP server.

# Email Content
• Subject: Fitness+ Membership Reminder - [Membership Type]
• Body: Contains details about the upcoming payment, including membership type, due date, monthly charges, and a link to the invoice.

# Configuration
Set up Gmail credentials in the .env file:

```JavaScript
GMAIL_USER=youremail@gmail.com
GMAIL_PASS=yourpassword
```

# Testing
• Unit tests are included to ensure the functionality of the code.
• Run tests with the following command:

```JavaScript
npm run test
```

# Contact
For more information, please contact:

• Name: Ogbonnaya Kingsley
• Email: ogbonnayakingsike@gmail.com