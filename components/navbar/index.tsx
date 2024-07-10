"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import HamIcon from "@/assets/icons/HamIcon";

const NAVBAR_TABS = [
    { text: 'About us', href: '/about' },
    { text: 'Companies', href: '/companies' },
]
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <header className="py-6 lg:p-6 w-full z-20 fixed left-2/4 -translate-x-2/4 text-light bg-dark shadow-lg">
            <div className="main-width lg:max-w-full flex items-center justify-between">
                <Image 
                    className="-mt-2 sm:-mt-4"
                    src="/logo.png"
                    width={137}
                    height={39}
                    alt="logo"
                />
                <button
                    onClick={toggleMenu}
                    className="-m-1 p-1 block sm:hidden hover:bg-light/10 rounded"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <HamIcon size={36} />
                </button>
                <nav className={twMerge(
                    "w-full h-screen fixed top-full left-full flex flex-col items-center bg-dark transition-[left] duration-300",
                    menuOpen && 'left-0',
                    "sm:relative sm:h-[unset] sm:w-[unset] sm:top-[unset] sm:left-[unset] sm:flex-row sm:gap-5 sm:bg-transparent",
                )}>
                    <ul className={twMerge(
                        "mb-8 mt-2 w-full flex flex-col items-center sm:flex-row divide-y-[1px] divide-light border-y-[1px] border-y-light",
                        "sm:m-0 sm:w-[unset] sm:gap-4 sm:divide-y-0 sm:border-y-0"
                    )}>
                        {NAVBAR_TABS.map(tab => (
                            <li 
                                key={tab.text}
                                className="w-full text-center"
                            >
                                <Link
                                    className={twMerge(
                                        "block py-8 text-2xl hover:bg-light/10",
                                        "sm:text-base sm:py-0"
                                    )}
                                    href={tab.href}
                                >
                                    {tab.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button
                        type="light"
                        className={twMerge(
                            "w-full max-w-main text-xl py-5",
                            "sm:w-[unset] sm:py-3 sm:text-base"
                        )}
                    >
                        Work with us
                    </Button>
                </nav>
            </div>
        </header>
    )
}