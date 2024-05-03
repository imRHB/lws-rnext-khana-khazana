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
                <div className="w-full max-w-[450px] mx-auto bg-white divide-y rounded-md divide-slate-700/20 ring-1 ring-slate-700/20">
                    <div className="p-4 space-y-4 sm:px-8 sm:py-6">
                        <h2 className="text-2xl font-bold text-center uppercase text-slate-700">
                            Login
                        </h2>
                        <p className="text-center text-slate-600">
                            Login to your Khana Khazana account
                        </p>
                    </div>

                    <SignInForm />

                    <div className="p-4 space-y-4 sm:px-8 sm:py-6">
                        <p className="text-center text-slate-700">
                            Don&apos; have an account?
                        </p>
                        <p className="text-center">
                            <Link
                                href="/register"
                                className="text-violet-400 hover:text-violet-500 hover:underline underline-offset-2"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] -z-50" />
        </React.Fragment>
    );
}
