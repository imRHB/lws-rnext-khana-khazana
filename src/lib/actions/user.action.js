"use server";

import User from "@/models/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(formData) {
    try {
        connectToDatabase();

        await User.create(Object.fromEntries(formData));
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function verifyUser(formData) {
    try {
        connectToDatabase();

        let credentials = {};
        credentials.email = formData.get("email");
        credentials.password = formData.get("password");

        const user = await User.findOne(credentials);

        if (!user) return null;

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
