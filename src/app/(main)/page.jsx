import Hero from "@/components/Hero";
import RecipeBoard from "@/components/recipe/RecipeBoard";

export const metadata = {
    title: "Khana Khazana | Home",
    description: "An online based recipe site powered by Learn With Sumit.",
    openGraph: {
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function HomePage() {
    return (
        <div>
            <Hero />
            <RecipeBoard />
        </div>
    );
}
