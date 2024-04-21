import React from "react";

import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Khana Khazan",
    description: "An online based recipe site powered by Learn With Sumit.",
};

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container">{children}</main>;
        </React.Fragment>
    );
}
