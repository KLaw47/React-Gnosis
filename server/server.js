require('dotenv').config();
const express = require('express');
const cors = require('cors');
const transporter = require('./mailer');

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


//basic route to test server
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Route to handle sending email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,    // Your email to receive messages
    replyTo: email,
    subject: `New message from ${name}`, // Include user's name in the subject
    text: `Message from ${name} (${email}):\n\n${message}`, // Format the body with user's info and message
  };

  try {
    // Send email using the configured transporter
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
