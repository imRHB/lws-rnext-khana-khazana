import Link from "next/link";

import SignInForm from "@/components/form/SignInForm";

export const metadata = {
    title: "Khana Khazana | Sign in to your account",
    description: "Sign in to your Khana Khazana account.",
};

export default function LoginPage() {
    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
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
    );
}
