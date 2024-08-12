import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION, // Use environment variable for region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to send an email
export const sendEmail = async (to, subject, text) => {
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Data: text },
      },
      Subject: { Data: subject },
    },
    Source: 'usaarischool@gmail.com', // Replace with your verified email address
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    return response;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};
