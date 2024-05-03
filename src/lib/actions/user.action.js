"use server";

import User from "@/models/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(formData) {
    try {
        connectToDatabase();

        const { email } = formData;
        const isUserExists = await User.findOne({ email });

        if (isUserExists)
            return {
                error: { message: "User exists with this email" },
            };

        await User.create(formData);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function verifyUser(formData) {
    try {
        connectToDatabase();

        const user = await User.findOne(formData).exec();

        if (!user)
            return {
                error: { message: "Invalid email or password" },
            };

        return JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            favourites: user.favourites,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}
