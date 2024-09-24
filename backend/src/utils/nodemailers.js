const transport = require("../config/email.config.js")
class NodeMailer {
    static SendEmailForOtp = async(otp, userEmail)=> {
        await  transport.sendMail({
            from: 'yuvrajsingh@gmail.com ', // sender address
            to: userEmail, // list of receivers
            subject: "OTP", // Subject line
    
            html: `
                Hi, ${userEmail},
                 i love you jaan please musambi ka juice pila do 
                your otp is <b>${otp}</b> 
    `,
    });
        

    }
}

module.exports = NodeMailer