require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',   // SendGrid's SMTP server
  port: 587,                    // Port for TLS
  secure: false,                // Set to true if using port 465
  auth: {
    user: 'apikey',             // Use 'apikey' as the username for SendGrid
    pass: process.env.SENDGRID_API_KEY // Your SendGrid API key
  },
  tls: {
    rejectUnauthorized: false    // Allows self-signed certificates
  }
});


module.exports = transporter;
