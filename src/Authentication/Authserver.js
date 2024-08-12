import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './db.js';
import sendNewsletter from './sendNewsletter.js';
import User from './models/User.js'; // Ensure correct import

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// API endpoint to handle registration
app.post('/api/register', async (req, res) => {
  console.log('Request body:', req.body);
  const { email, password, newsletters } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Create new user
    const user = new User({ email, password, newsletters });
    const savedUser = await user.save();
    console.log('Saved user:', savedUser);
    res.json({ message: 'Successfully registered!', user: savedUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(400).json({ message: 'Registration failed.', error: error.message });
  }
});

// API endpoint to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users.', error: error.message });
  }
});

// API endpoint to send newsletter
app.post('/api/sendNewsletter', async (req, res) => {
  console.log('Send newsletter request body:', req.body); // Added debug log
  const { subject, body } = req.body;
  try {
    await sendNewsletter(subject, body);
    res.json({ message: 'Newsletter sent successfully!' });
  } catch (error) {
    console.error('Error sending newsletter:', error);
    res.status(500).json({ message: 'Failed to send newsletter.', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
