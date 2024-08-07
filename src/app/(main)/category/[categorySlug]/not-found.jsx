"use client";

import { usePathname } from "next/navigation";

export default function CategoryNotFound() {
    const pathname = usePathname();
    const category = pathname.split("/")[2];

    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-2 max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-red-500 md:text-5xl">
                404
            </h2>
            <h4 className="text-lg font-bold md:text-xl">
                Category not found!
            </h4>
            <p className="font-semibold text-center">
                Unfortunately, the category named{" "}
                <span className="font-bold text-red-500">{category}</span> you
                are searching for does not exist in records!
            </p>
        </div>
    );
}
