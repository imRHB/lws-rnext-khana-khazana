"use client";

import { useEffect, useState } from "react";

export default function GlobalErrorPage({ error, reset }) {
    const [stateError, setStateError] = useState(null);

    useEffect(() => {
        setStateError(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2 className="font-semibold text-red-400">
                {stateError ? stateError?.message : "Something went wrong!"}
            </h2>
            <button
                onClick={() => reset()}
                className="px-6 py-2 text-white bg-red-400 rounded-full hover:bg-red-500 focus:ring-red-400 focus:ring-2 ring-offset-1"
            >
                Try again
            </button>
        </div>
    );
}
