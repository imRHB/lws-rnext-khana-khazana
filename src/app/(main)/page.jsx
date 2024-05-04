import React from "react";

import Hero from "@/components/Hero";
import RecipeBoard from "@/components/recipe/RecipeBoard";

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    openGraph: {
        title: "Khana Khazana | Home",
        description: "An online based recipe site powered by Learn With Sumit.",
        url: process.env.NEXT_PUBLIC_APP_URL,
        siteName: "Khana Khazana",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Khana Khazana",
        description: "An online based recipe site powered by Learn With Sumit.",
        creator: "@imprantu",
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
        <React.Fragment>
            <Hero />
            <RecipeBoard />
        </React.Fragment>
    );
}
