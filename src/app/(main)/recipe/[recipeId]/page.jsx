import { notFound } from "next/navigation";

import RecipeItemCookingDetails from "@/components/recipe/RecipeItemCookingDetails";
import RecipeItemDetails from "@/components/recipe/RecipeItemDetails";
import RecipeItemImage from "@/components/recipe/RecipeItemImage";
import { getRecipeById, getRecipes } from "@/lib/actions/recipe.action";

export async function generateMetadata({ params: { recipeId } }) {
    const recipe = await getRecipeById(recipeId);

    return {
        title: `Khana Khazan | ${recipe ? recipe?.name : "Recipe not found"}`,
        description: recipe?.description,
        openGraph: {
            title: `Khana Khazana | ${
                recipe ? recipe?.name : "Recipe not found"
            }`,
            description: recipe?.description,
            images: [
                {
                    url: recipe?.image,
                    width: 1200,
                    height: 630,
                    alt: recipe?.name,
                },
            ],
        },
    };
}

export default async function RecipeDetailsPage({ params: { recipeId } }) {
    const recipe = await getRecipeById(recipeId);

    if (!recipe) notFound();

    return (
        <section>
            <div className="container grid grid-cols-12 gap-8 justify-items-center">
                <RecipeItemImage image={recipe.image} />
                <RecipeItemDetails recipe={recipe} />
            </div>

            <RecipeItemCookingDetails steps={recipe.steps} />
        </section>
    );
}

export async function generateStaticParams() {
    const recipes = await getRecipes();

    return recipes.map((recipe) => ({
        recipeId: recipe._id.toString(),
    }));
}
