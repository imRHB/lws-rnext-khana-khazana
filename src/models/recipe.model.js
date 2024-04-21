import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    activeTime: {
        type: String,
    },
    totalTime: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    serves: {
        type: Number,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    steps: {
        type: [String],
        required: true,
    },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
