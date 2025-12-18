"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

type NavLink = {
    name: string
    path: string
}

function Header() {

    const pathname = usePathname();

    const [ menuState, setMenuState ] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    const navLinks: NavLink[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Events", path: "/events" },
        { name: "Blog", path: "/blog" },
    ]

    return (
        <section className="fixed w-full z-20">
            <div className="relative w-full max-w-[min(950px,90%)] mx-auto flex justify-between items-center glass bg-my-deep-black/70 py-5 lg:py-3 px-3 rounded-full mt-8 border border-my-black shadow-lg backdrop-blur-md">
                <a>
                    <Image
                        src="/images/keda-logo.webp"
                        alt="Keda Marketing Logo"
                        width={70}
                        height={50}
                        className="ml-10"
                    />
                </a>
                <div className="max-w-md w-full lg:flex justify-between hidden">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`px-4 py-3 font-semibold text-lg rounded-full transition-all duration-300 ${isActive
                                    ? "bg-my-black text-my-white border border-my-highlight" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:flex hidden">
                    <button className="text-my-deep-black px-7 py-4 bg-my-lime rounded-full font-semibold text-lg">Contact Us</button>
                </div>
                <div onClick={toggleMenu} className="flex flex-col space-y-1 cursor-pointer lg:hidden items-end mr-5">
                    <div className="h-0.5 w-6 bg-my-lime rounded-b-full"></div>
                    <div className="h-0.5 w-6 bg-my-lime rounded-b-full"></div>
                    <div className="h-0.5 w-4 bg-my-lime rounded-b-full"></div>
                </div>
                <div className={`mt-3 duration-500 absolute top-full py-6 right-0 w-42 rounded-2xl bg-my-deep-black flex flex-col border border-my-black ${ menuState ? "opacity-100 visible" : "opacity-0 invisible" } lg:hidden`}>
                    {navLinks.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="font-semibold text-lg py-2 px-6 hover:bg-my-black"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Header