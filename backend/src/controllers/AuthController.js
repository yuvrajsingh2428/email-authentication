const Authservice = require("../services/Authservice.js");
const CatchAsync = require("../utils/CatchAsync");
const httpStatus = require("http-status");

class AuthController {
    static loginUser = CatchAsync(async (req, res) => {
        const res_obj = await Authservice.loginUSer(req.body);  // Corrected 'Authservice' to 'AuthService'
        res.status(httpStatus.OK).send(res_obj);
    });

    static verifyOtp = CatchAsync(async (req, res) => {
        const res_obj = await Authservice.verifyOtp(req.body);  
        res.status(httpStatus.OK).send(res_obj);
    });
}

module.exports = AuthController;
