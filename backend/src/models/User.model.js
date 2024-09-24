const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    otp: {
        type:String,
        unique: true,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    isVerified: {
        type: Boolean,
        default:false,
    }

}, {timestamps:true})


const UserModel = mongoose.model("user", Schema)

module.exports = UserModel