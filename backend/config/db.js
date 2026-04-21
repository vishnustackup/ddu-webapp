const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected");

    } catch (error) {
        console.log("error in connecting db", error);

    }

}

module.exports = connectDB