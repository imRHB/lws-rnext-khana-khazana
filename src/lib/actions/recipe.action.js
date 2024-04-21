import Recipe from "@/models/recipe.model";
import { connectToDatabase } from "../mongoose";

export async function getRecipes() {
    try {
        connectToDatabase();

        const recipes = await Recipe.find({});

        return recipes;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipesForCard() {
    try {
        connectToDatabase();

        const recipes = await Recipe.find({});

        return recipes.map((recipe) => {
            return {
                _id: recipe._id,
                name: recipe.name,
                author: recipe.author,
                thumbnail: recipe.thumbnail,
                rating: recipe.rating,
            };
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipeById(recipeId) {
    try {
        connectToDatabase();

        const recipe = await Recipe.findById(recipeId);

        return recipe;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
