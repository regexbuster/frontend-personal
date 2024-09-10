import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null };
}

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error('MongoDB connection failed.');
    }
};
