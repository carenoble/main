import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// IMPORTANT: Set GMAIL_APP_PASSWORD in your environment variables to a Gmail app password
export async function POST(request: Request) {
  const data = await request.json();

  // Configure the transporter (using Gmail SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mccarthyworkmail@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD, // Use an app password, not your main Gmail password
    },
  });

  const mailOptions = {
    from: 'mccarthyworkmail@gmail.com',
    to: 'mccarthyworkmail@gmail.com',
    subject: 'New Visit Booking Enquiry',
    text: `
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
      Preferred Date: ${data.date}
      Preferred Time: ${data.time}
      Additional Info: ${data.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 