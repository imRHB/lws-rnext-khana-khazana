"use server";

import Recipe from "@/models/recipe.model";
import { convertToURLString } from "@/utils";
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
        const uniqueCategories = [...new Set(allCategories)];

        return uniqueCategories.map((category) => {
            return {
                name: category,
                slug: convertToURLString(category),
            };
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

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
