import Link from "next/link";

import { createUser } from "@/lib/actions/user.action";

export default async function RegisterPage() {
    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="text-2xl font-bold">Sign Up</h4>
                <form className="login-form" action={createUser}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>
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
                        Create Account
                    </button>
                </form>

                <p className="text-xs text-center text-gray-600">Or</p>

                <Link
                    href="/login"
                    className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
                >
                    Login
                </Link>
            </div>
        </section>
    );
}
