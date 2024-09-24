const { default: mongoose} = require('mongoose')

exports.ConnectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log(`the db is connect with ${mongoose.connection.host} host`);
        
    } catch (error) {
        console.error(`DB connection failed: ${error.message}`.bgRed.white);
        mongoose.disconnect()
        process.exit(1)
        
    }
}
