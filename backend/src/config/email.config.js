const nodemailer = require('nodemailer')


// Load environment variables
require('dotenv').config();

// Log the SMTP configuration
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);



const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

// Optional: Test the connection
transport.verify((error, success) => {
    if (error) {
        console.error('Email transport configuration error:', error);
    } else {
        console.log('Email transport is ready to send messages.');
    }
});

module.exports = transport