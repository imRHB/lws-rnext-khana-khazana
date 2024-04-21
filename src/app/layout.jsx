import "./globals.css";

export const metadata = {
    title: "Khana Khazan",
    description: "An online based recipe site powered by Learn With Sumit.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
