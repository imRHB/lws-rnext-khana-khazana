import Image from "next/image";
import Link from "next/link";

import AuthStatus from "./AuthStatus";

const NAV_ITEMS = [
    { name: "Home", href: "/", active: true },
    { name: "Recipe", href: "/", active: false },
    { name: "About Us", href: "/", active: false },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-white">
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image
                        src="/assets/images/logo.png"
                        width={120}
                        height={100}
                        alt="Logo"
                        className="object-cover h-[40px]"
                    />
                </Link>

                <ul className="flex items-center gap-4 text-sm text-gray-500">
                    {NAV_ITEMS.map((item) => (
                        <li
                            key={item.name}
                            className={`py-2 ${item.active && "active"}`}
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}

                    <li>
                        <AuthStatus />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
