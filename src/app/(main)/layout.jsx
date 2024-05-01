import React from "react";

import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Khana Khazana",
    description: "An online based recipe site powered by Learn With Sumit.",
};

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container my-4">{children}</main>;
        </React.Fragment>
    );
}
