import Link from "next/link";

import { verifyUser } from "@/lib/actions/user.action";

export default function LoginPage() {
    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="text-2xl font-bold">Sign in</h4>
                <form className="login-form" action={verifyUser}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
                    >
                        Login
                    </button>
                </form>

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
