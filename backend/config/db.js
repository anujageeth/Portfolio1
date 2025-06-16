const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Set strictQuery to prepare for Mongoose 7
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // Removed deprecated options:
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;