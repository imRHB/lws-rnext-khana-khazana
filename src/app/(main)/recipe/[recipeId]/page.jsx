import RecipeItemCookingDetails from "@/components/recipe/RecipeItemCookingDetails";
import RecipeItemDetails from "@/components/recipe/RecipeItemDetails";
import RecipeItemImage from "@/components/recipe/RecipeItemImage";

export default function RecipeDetailsPage() {
    return (
        <section>
            <div className="container grid grid-cols-12 gap-8 justify-items-center">
                <RecipeItemImage />
                <RecipeItemDetails />
            </div>

            <RecipeItemCookingDetails />
        </section>
    );
}
