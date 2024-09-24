const UserModel = require("../models/User.model.js")
const ApiError = require("../utils/ApiError.js")
const httpStatus = require("http-status"); 
const NodeMailer = require("../utils/nodemailers.js");
const JWTService = require('../utils/jwt.utils.js');
const jwt = require('jsonwebtoken');


class Authservice{

    static generateOTP(digit)
    {
        var digits = '0123456789';
    
        var otp =''

        for (let i = 0; i <= digit; i++)
        {
            var index = Math.floor(Math.random()*(digits.length))

            otp = otp + digits[index];
        }
        return otp
}
    
    static async loginUSer(body){
        //return body
        // checking if email is present or not 

        if(!body.email){
            throw new ApiError(httpStatus.BAD_REQUEST, "Please provide Email")
        }
        const chk_user = await UserModel.findOne({ email: body.email.toLowerCase()})

        if(chk_user){
            // if already verified
            // block of code 
            const otp = Authservice.generateOTP(5)

                    await NodeMailer.SendEmailForOtp(otp, body.email)

                    await UserModel.findOneAndUpdate(
                        { email: body.email.toLowerCase()},
                        { otp:otp, isVerified:false }
                    )

            return {
                msg: "Code send on your email"
            }
        }

                //  Not verified
                const otp = Authservice.generateOTP(5)
                await NodeMailer.SendEmailForOtp(otp, body.email)


                await UserModel.create({
                    otp, 
                    email: body.email.toLowerCase()

                })
                return {
                    msg: "Code send on your email"
                }
    }

    static  verifyOtp = async (body) =>{
            const {email, otp} = body
                if(!email || !otp ){
                    throw new ApiError(httpStatus.BAD_REQUEST, "Please fill valid Details")
                }
                if(isNaN(otp)){
                    throw new ApiError(httpStatus.BAD_REQUEST, "Please provide valid otp")
                }

    const chk_user = await UserModel.findOne({email:body.email.toLowerCase()})
    
            if(!chk_user){
                throw new ApiError(httpStatus.BAD_REQUEST, "Account not found")
            }

            if(chk_user.otp != otp){
                throw new ApiError(httpStatus.BAD_REQUEST, "Invalid otp")
            }
            
            const token = await JWTService.generateToken({userId: chk_user._id})

            return {
                msg: "Login Success",
                "token": token
            }
    }
}


module.exports = Authservice