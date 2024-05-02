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
    title: "Khana Khazana",
    description: "An online based recipe site powered by Learn With Sumit.",
    openGraph: {
        images: [{ url: "../../public/og.png" }],
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
