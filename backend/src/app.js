require('dotenv').config();
const express = require("express")
const ApiError = require("./utils/ApiError")
const httpStatus = require("http-status")
const ErrorHandling = require("./middleware/ErrorHandling")
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json({limit: '16mb'}))
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/v1/auth", require("./auth.route"))


app.use("*", (req, res) =>{
    throw new ApiError(httpStatus.NOT_FOUND, "Page not Found")
})

app.use(ErrorHandling)

module.exports = app