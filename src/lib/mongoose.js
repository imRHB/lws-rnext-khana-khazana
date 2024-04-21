import mongoose from "mongoose";

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI)
        return console.log("MONGODB URL IS NOT FOUND!");

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "khanaKhazana",
        });

        console.log("Connected to database!");
    } catch (error) {
        console.error(error);
    }
};
