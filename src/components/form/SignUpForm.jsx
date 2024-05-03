"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { createUser } from "@/lib/actions/user.action";
import Field from "./Field";

export default function SignUpForm() {
    const [error, setError] = useState(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(formData) {
        try {
            setError(null);

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
        <div className="p-4 sm:px-8 sm:py-6">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <Field label="First Name" error={errors.firstName}>
                    <input
                        {...register("firstName", {
                            required: "First name is required",
                        })}
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Jane"
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                    />
                </Field>

                <Field label="Last Name" error={errors.lastName}>
                    <input
                        {...register("lastName", {
                            required: "Last name is required",
                        })}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                    />
                </Field>

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
                    className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
                >
                    Create account
                </button>
            </form>
        </div>
    );
}
