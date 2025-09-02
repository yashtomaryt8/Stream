import { log } from 'console';
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("MongoDB connected successfully"))
        await mongoose.connect(`${process.env.MONGODB_URI}/steam`)
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

export default connectToDatabase;

