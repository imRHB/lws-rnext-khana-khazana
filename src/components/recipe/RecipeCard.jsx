import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const { _id, name, author, thumbnail, rating } = recipe || {};

    return (
        <div className="card">
            <Image
                src={thumbnail}
                width={300}
                height={160}
                className="w-[300px] h-[160px] rounded-md"
                alt={name}
            />
            <h4 className="my-2">
                <Link href={`/recipe/${_id}`}>{name}</Link>
            </h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
                <span>⭐️ {rating}</span>
                <span>By: {author}</span>
            </div>
        </div>
    );
}
