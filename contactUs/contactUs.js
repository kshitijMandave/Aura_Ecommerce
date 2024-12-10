const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); // For environment variables (optional but recommended)

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON payloads

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // You can replace it with your email service (e.g., Yahoo, Outlook)
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.PASSWORD, // App password or email password
  },
});

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // Sender email address
    to: to, // Recipient email address
    subject: subject, // Email subject
    text: text, // Email body (plain text)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
