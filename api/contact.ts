import type { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-ignore
import nodemailer from "nodemailer";
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {

  const info = await transporter.sendMail({
    from: '"Johan Torfs" <contact@johantorfs.be>',
    to: `contact@johantorfs.be`,
    subject: "Contactverzoek Johan Torfs",
    html: `
      <p>Beste Johan,</p>
      <p>Er is een nieuw contactverzoek binnengekomen via de website.</p>
      <ul>
        <li>Naam: ${request.body.name}</li>
        <li>Email: ${request.body.email}</li>
        <li>Extra info: ${request.body.message}</li>
      </ul>
    `,
  });

  if (info.response.length > 0) {
    response.status(201).end();
  } else {
    response.status(500).json({
      error: info,
    });
  }  
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: +(process.env.MAIL_PORT ?? 465),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  connectionTimeout: 5000,
});
