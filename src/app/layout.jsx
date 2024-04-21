import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    fontDisplay: "swap",
});

export const metadata = {
    title: "Khana Khazan",
    description: "An online based recipe site powered by Learn With Sumit.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
