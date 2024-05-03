import Link from "next/link";
import React from "react";

import SignInForm from "@/components/form/SignInForm";

export const metadata = {
    title: "Khana Khazana | Sign in to your account",
    description: "Sign in to your Khana Khazana account.",
};

export default function LoginPage() {
    return (
        <React.Fragment>
            <section className="grid h-screen place-items-center">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md bg-white">
                    <h4 className="text-2xl font-bold">Sign in</h4>
                    <SignInForm />

                    <p className="text-xs text-center text-gray-600">Or</p>

                    <Link
                        href="/register"
                        className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
                    >
                        Create New Account
                    </Link>
                </div>
            </section>

            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] -z-50" />
        </React.Fragment>
    );
}
