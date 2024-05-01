import { notFound } from "next/navigation";

import RecipeItemCookingDetails from "@/components/recipe/RecipeItemCookingDetails";
import RecipeItemDetails from "@/components/recipe/RecipeItemDetails";
import RecipeItemImage from "@/components/recipe/RecipeItemImage";
import { getRecipeById } from "@/lib/actions/recipe.action";

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
