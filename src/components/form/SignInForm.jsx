"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "@/hooks/useAuth";
import { verifyUser } from "@/lib/actions/user.action";
import Field from "./Field";

export default function SignInForm() {
    const [error, setError] = useState(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { setAuth } = useAuth();

    async function onSubmit(formData) {
        try {
            setError(null);

            const response = await verifyUser(formData);

            if (response?.error) {
                setError(response.error.message);
            } else {
                setAuth(JSON.parse(response));

                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="p-4 sm:px-8 sm:py-6">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <Field label="Email" error={errors.email}>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="mail@example.com"
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                        disabled={isSubmitting}
                    />
                </Field>

                <Field label="Password" error={errors.password}>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 4,
                                message: "Minimum 4 characters",
                            },
                        })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="* * * * * *"
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                        disabled={isSubmitting}
                    />
                </Field>

                {error && (
                    <div className="p-2 rounded-lg bg-red-50">
                        <p className="text-sm font-semibold text-center text-red-500">
                            {error}
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
