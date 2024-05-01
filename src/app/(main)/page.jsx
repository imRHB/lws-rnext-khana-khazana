import Hero from "@/components/Hero";
import RecipeBoard from "@/components/recipe/RecipeBoard";

export const metadata = {
    title: "Khana Khazana | Home",
    description: "An online based recipe site powered by Learn With Sumit.",
};

export default function HomePage() {
    return (
        <div>
            <Hero />
            <RecipeBoard />
        </div>
    );
}
