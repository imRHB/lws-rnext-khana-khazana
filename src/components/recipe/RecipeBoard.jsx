import RecipeCategoryList from "./RecipeCategoryList";
import RecipeItemList from "./RecipeItemList";

export default function RecipeBoard() {
    return (
        <section className="py-8">
            <div className="grid grid-cols-12 py-4">
                <RecipeCategoryList />
                <RecipeItemList />
            </div>
        </section>
    );
}
