import dotenv from 'dotenv';
import { sendEmail } from './ses.js';

// Load environment variables from .env file
dotenv.config();

const testSendEmail = async () => {
  try {
    await sendEmail('askditman@gmail.com', 'July Newsletter', 'INININININININNI');
    console.log('Test email sent');
  } catch (error) {
    console.error('Error sending test email:', error);
  }
};

// Add this in testsendemail.js before the sendEmail call
console.log('AWS Region:', process.env.AWS_REGION);
console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? 'Loaded' : 'Not Loaded');
console.log('AWS Secret Access Key:', process.env.AWS_SECRET_ACCESS_KEY ? 'Loaded' : 'Not Loaded');

testSendEmail();
