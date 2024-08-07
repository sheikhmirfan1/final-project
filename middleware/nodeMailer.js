import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohammad.irfan.sheikh@students.beaminstitute.org",
    pass: process.env.GMAIL_PASSWORD,
  },
}); ;

export default transport;