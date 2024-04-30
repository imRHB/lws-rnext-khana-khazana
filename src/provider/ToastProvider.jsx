"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider({ children }) {
    return (
        <React.Fragment>
            {children}
            <ToastContainer
                position="bottom-right"
                theme="light"
                toastStyle={{
                    backgroundColor: "#FAFAFA",
                    border: "1px solid #F5F5F5",
                }}
                stacked
                hideProgressBar
            />
        </React.Fragment>
    );
}
