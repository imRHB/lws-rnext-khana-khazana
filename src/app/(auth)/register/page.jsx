import Link from "next/link";

export default function RegisterPage() {
    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="text-2xl font-bold">Sign Up</h4>
                <form className="login-form">
                    <div>
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" id="fname" />
                    </div>

                    <div>
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" />
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label for="password">Password</label>
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
