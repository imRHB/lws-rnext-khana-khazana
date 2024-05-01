"use server";

import Recipe from "@/models/recipe.model";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

export async function getRecipes() {
    try {
        await connectToDatabase();

        const recipes = await Recipe.find({});

        return recipes;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipesForCard() {
    try {
        await connectToDatabase();

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
        await connectToDatabase();

        const recipe = await Recipe.findById(recipeId);

        return recipe;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipesByCategory(category) {
    try {
        await connectToDatabase();

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
        await connectToDatabase();

        const recipes = await Recipe.find({});
        const allCategories = recipes.map((recipe) => recipe.category);

        return [...new Set(allCategories)];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function toggleFavouriteRecipe(email, recipeId) {
    try {
        await connectToDatabase();

        const user = await User.findOne({ email });
        const recipe = user.favourites.includes(recipeId);

        if (recipe) {
            user.favourites.pull(recipeId);
        } else {
            user.favourites.push(recipeId);
        }

        user.save();
    } catch (error) {
        console.log(error);
        throw error;
    }

    revalidatePath("/");
}

export async function isRecipeFavourite(email, recipeId) {
    try {
        await connectToDatabase();

        if (email && recipeId) {
            const user = await User.findOne({ email });
            const favRecipe = user.favourites.includes(recipeId);

            return {
                favRecipe,
            };
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/* 

export async function getRecipeCategories() {
    try {
        await connectToDatabase();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

*/
