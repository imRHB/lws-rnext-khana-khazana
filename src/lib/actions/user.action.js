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

export async function verifyUser(credentials) {
    try {
        connectToDatabase();

        const user = await User.findOne(Object.fromEntries(credentials));

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
