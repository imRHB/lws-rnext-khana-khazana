import { getRecipesForCard } from "@/lib/actions/recipe.action";
import RecipeCard from "./RecipeCard";

export default async function RecipeItemList() {
    const recipes = await getRecipesForCard();

    return (
        <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
