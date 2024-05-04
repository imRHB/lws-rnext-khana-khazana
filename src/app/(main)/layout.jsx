import React from "react";

import Navbar from "@/components/Navbar";

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    openGraph: {
        title: "Khana Khazana",
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

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container my-4">{children}</main>;
        </React.Fragment>
    );
}
