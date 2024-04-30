"use client";

import React, { useState, useTransition } from "react";
import { toast } from "react-toastify";

import useAuth from "@/hooks/useAuth";
import { toggleFavouriteRecipe } from "@/lib/actions/recipe.action";

export default function Favourite({ recipeId }) {
    const [isPending, startTransition] = useTransition();

    const { auth } = useAuth();
    const isFav = auth?.favourites?.includes(recipeId);

    const [fav, setFav] = useState(isFav);

    async function toggleFavourite() {
        if (!auth) {
            toast.warning("Please login to add this recipe as your favorite.");
            return;
        }

        await toggleFavouriteRecipe(
            auth?.email,
            recipeId,
            `/recipe/${recipeId}`
        );
        setFav(!fav);
    }

    return (
        <React.Fragment>
            {isPending ? (
                <div>loading...</div>
            ) : (
                <div
                    className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
                    onClick={() => {
                        startTransition(() => {
                            toggleFavourite();
                        });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={auth && fav ? "#eb4a36" : "none"}
                        stroke={auth && fav ? "#eb4a36" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span className={`${auth && fav && "text-[#eb4a36]"}`}>
                        Favourite
                    </span>
                </div>
            )}
        </React.Fragment>
    );
}
