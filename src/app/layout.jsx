import { Poppins } from "next/font/google";

import "./globals.css";

import AuthProvider from "@/provider/AuthProvider";
import ToastProvider from "@/provider/ToastProvider";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    fontDisplay: "swap",
});

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    title: "Khana Khazana",
    description: "An online based recipe site powered by Learn With Sumit.",
    openGraph: {
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
            },
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/api/og`,
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ToastProvider>
                    <AuthProvider>{children}</AuthProvider>
                </ToastProvider>
            </body>
        </html>
    );
}
