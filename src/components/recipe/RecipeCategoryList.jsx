import Link from "next/link";

import { getRecipeCategories } from "@/lib/actions/recipe.action";

export default async function RecipeCategoryList() {
    const categoryList = await getRecipeCategories();

    return (
        <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
                <h3 className="text-xl font-bold">Recipes</h3>
                <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
                    {categoryList.map((category) => (
                        <li key={category}>
                            <Link href={`/category/${category}`}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
