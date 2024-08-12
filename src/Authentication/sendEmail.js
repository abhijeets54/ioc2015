import { sendEmail as sesSendEmail } from './ses.js'; // Adjusted for named import

const sendEmailWrapper = (to, subject, body) => {
  const params = {
    Source: 'usaarischool@gmail.com', // Replace with your verified email address
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: body,
        },
      },
    },
  };

  return sesSendEmail(params); // Ensure params are passed correctly
};

export default sendEmailWrapper; // Default export
