import AWS from 'aws-sdk';
import User from './models/User.js'; // Ensure correct import
import sendEmail from './sendEmail.js'; // Ensure correct import

AWS.config.update({ region: 'ap-south-1' });

const ses = new AWS.SES();

const sendEmailWrapper = async (recipient, subject, body) => {
  const params = {
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: { Data: body },
      },
      Subject: { Data: subject },
    },
    Source: 'usaarischool@gmail.com', // Replace with your verified email address
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(`Email sent to ${recipient}:`, result); // Debugging log
  } catch (error) {
    console.error(`Error sending email to ${recipient}:`, error); // Debugging log
  }
};

const sendNewsletter = async (subject, body) => {
  try {
    const users = await User.find({});
    console.log('Users found for newsletter:', users); // Debugging log
    for (const user of users) {
      await sendEmailWrapper(user.email, subject, body);
    }
  } catch (error) {
    console.error('Error sending newsletter:', error); // Debugging log
  }
};

export default sendNewsletter;
