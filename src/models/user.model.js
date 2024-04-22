import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favourites: {
        type: Array,
        required: false,
        default: [],
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
