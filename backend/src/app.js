require('dotenv').config();
const express = require("express")
const ApiError = require("./utils/ApiError")
const httpStatus = require("http-status")
const ErrorHandling = require("./middleware/ErrorHandling")
const cors = require('cors')
const app = express()

const allowedOrigins = ['http://localhost:5173','https://email-authentication-backend.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
    } else {
        callback(new Error('Not allowed by CORS'))
    }
},
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If your frontend is sending cookies or authentication headers
  }));
app.use(express.json({limit: '16mb'}))
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/v1/auth", require("./auth.route"))


app.use("*", (req, res) =>{
    throw new ApiError(httpStatus.NOT_FOUND, "Page not Found")
})

app.use(ErrorHandling)

module.exports = app