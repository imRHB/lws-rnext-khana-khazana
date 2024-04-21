import RecipeCard from "@/components/recipe/RecipeCard";

export default function CategoryWiseRecipePage() {
    return (
        <section className="py-8">
            <h3 className="text-xl font-semibold">Appetizers & Snacks</h3>

            <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </section>
    );
}
