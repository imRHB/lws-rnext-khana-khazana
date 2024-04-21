import Image from "next/image";

export default function RecipeItemImage({ image }) {
    return (
        <div className="col-span-12 md:col-span-6">
            <Image
                src={image}
                width={600}
                height={600}
                alt=""
                className="object-contain w-full h-full rounded-lg"
            />
        </div>
    );
}
