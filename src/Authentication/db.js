import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/newsletter');
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
