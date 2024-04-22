"use client";

import Link from "next/link";
import React from "react";

import useAuth from "@/hooks/useAuth";

export default function AuthStatus() {
    const { auth, setAuth } = useAuth();

    return (
        <React.Fragment>
            {auth ? (
                <React.Fragment>
                    <span className="mr-2 font-semibold">{auth.firstName}</span>
                    <span>{"|"}</span>
                    <span
                        className="ml-2 font-semibold cursor-pointer"
                        onClick={() => setAuth(null)}
                    >
                        Logout
                    </span>
                </React.Fragment>
            ) : (
                <span className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                    <Link href="/login">Login</Link>
                </span>
            )}
        </React.Fragment>
    );
}
