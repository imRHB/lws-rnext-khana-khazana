import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const cached = { connection: undefined, promise: undefined };

export const connectToDatabase = async () => {
    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            dbName: "khanaKhazana",
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (error) {
        cached.promise = undefined;
        throw error;
    }

    return cached.connection;
};
