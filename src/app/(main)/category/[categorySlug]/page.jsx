import RecipeCard from "@/components/recipe/RecipeCard";
import { getRecipesByCategory } from "@/lib/actions/recipe.action";
import { decodeURIString } from "@/utils";

export default async function CategoryWiseRecipePage({
    params: { categorySlug },
}) {
    const recipes = await getRecipesByCategory(decodeURIString(categorySlug));

    return (
        <section className="py-8">
            <h3 className="text-xl font-semibold">Appetizers & Snacks</h3>

            {recipes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-3xl font-bold text-slate-700">
                        Not found!
                    </h3>
                    <p className="font-semibold text-slate-600">
                        No recipes found with category{" "}
                        <span className="text-red-500">
                            {decodeURIString(categorySlug)}
                        </span>
                    </p>
                </div>
            )}
        </section>
    );
}
