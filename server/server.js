const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON data

//basic route to test server
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Route to handle sending email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer transport (using Gmail as an example)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use a different email service if needed
    auth: {
      user: process.env.EMAIL_USER, // Add your email to environment variables
      pass: process.env.EMAIL_PASS, // Add your email password to environment variables
    },
  });

  // Define email options
  let mailOptions = {
    from: email, // The user's email (from the form)
    to: process.env.EMAIL_USER, // Your email to receive messages
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
