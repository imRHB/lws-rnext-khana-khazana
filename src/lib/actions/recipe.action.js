"use server";

import { revalidatePath } from "next/cache";

import Recipe from "@/models/recipe.model";
import User from "@/models/user.model";
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

export async function getRecipesByCategory(category) {
    try {
        connectToDatabase();

        const recipes = await Recipe.find({
            category: category,
        });

        return recipes;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipeCategories() {
    try {
        connectToDatabase();

        const recipes = await Recipe.find({});
        const allCategories = recipes.map((recipe) => recipe.category);

        return [...new Set(allCategories)];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function toggleFavouriteRecipe(userEmail, recipeId, path) {
    try {
        connectToDatabase();

        const user = await User.findOne({ email: userEmail });

        if (user) {
            const recipe = user.favourites.includes(recipeId);

            if (recipe) {
                user.favourites.pull(recipeId);
            } else {
                user.favourites.push(recipeId);
            }

            user.save();

            // revalidatePath(`/recipe/${recipeId}`);
            revalidatePath(path);
        } else {
            console.log("Please login to add the recipe as your favorites");
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/* export async function isRecipeFavourite(userEmail, recipeId) {
    let isFavourite;

    try {
        connectToDatabase();

        const user = await User.findOne({ email: userEmail });

        if (user) {
            const recipe = user.favourites.find(
                (id) => id.toString() === recipeId
            );
            isFavourite = recipe ? true : false;
        } else {
            console.log("Please login to add the recipe as your favorites");
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

    return { isFavourite };
} */

/* 

export async function getRecipeCategories() {
    try {
        connectToDatabase();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

*/
