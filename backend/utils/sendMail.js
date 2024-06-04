import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const email = process.env.EMAIL;
export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
