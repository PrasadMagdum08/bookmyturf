const mongoose = require('mongoose');

const connectDB = async () => {

    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bookmyturf', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
    });
}; 


module.exports = connectDB;