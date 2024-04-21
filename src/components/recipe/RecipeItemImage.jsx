import Image from "next/image";

export default function RecipeItemImage() {
    return (
        <div className="col-span-12 md:col-span-6">
            <Image
                src="https://source.unsplash.com/Zh0mYmMBZjQ/600x600"
                width={600}
                height={600}
                alt=""
                className="object-contain w-full h-full rounded-lg"
            />
        </div>
    );
}
