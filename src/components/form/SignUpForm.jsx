"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createUser } from "@/lib/actions/user.action";
import { toast } from "react-toastify";

export default function SignUpForm() {
    const [error, setError] = useState(null);
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            setError(null);

            const formData = new FormData(event.currentTarget);

            const response = await createUser(formData);

            if (response?.error) {
                setError(response.error.message);
            } else {
                toast.success("New user added successfully");
                router.push("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" required />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
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
                Create Account
            </button>
        </form>
    );
}
