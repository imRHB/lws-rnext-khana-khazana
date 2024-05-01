"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import useAuth from "@/hooks/useAuth";
import { verifyUser } from "@/lib/actions/user.action";

export default function SignInForm() {
    const [error, setError] = useState(null);
    const router = useRouter();

    const { setAuth } = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            setError(null);

            const formData = new FormData(event.currentTarget);

            const response = await verifyUser(formData);

            if (!response) {
                setError("Invalid credentials");
            } else {
                setAuth(JSON.parse(response));

                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            {error && (
                <div className="p-2 rounded-lg bg-red-50">
                    <p className="text-center text-red-500">{error}</p>
                </div>
            )}

            <button
                type="submit"
                className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
                Login
            </button>
        </form>
    );
}
