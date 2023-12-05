const mongoose = require('mongoose');
const uri = "mongodb://root:example@db:27017/";
const connectDB = async () => {
    try {
        await mongoose.connect(uri , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 90000,
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;