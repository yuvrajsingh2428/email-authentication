const transport = require('./config/email.config'); // Adjust the path if needed

const testSendEmail = async () => {
    try {
        await transport.sendMail({
            from: 'offcyuvi2482@gmail.com', // sender address
            to: 'recipient@example.com', // replace with a valid recipient email
            subject: 'Test Email',
            text: 'This is a test email.',
        });
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};

testSendEmail();
