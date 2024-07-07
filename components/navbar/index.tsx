import Image from "next/image";
import Link from "next/link";
import Button from "../button";

const NAVBAR_TABS = [
    { text: 'About us', href: '/about' },
    { text: 'Companies', href: '/companies' },
]
export default function Navbar() {
    return(
        <header className="p-5 absolute w-full flex justify-between text-light">
            <Image 
                src="/logo.png"
                width={136}
                height={39}
                alt="logo"
            />
            <nav className="hidden sm:flex items-center gap-5">
                <ul className="flex gap-4">
                    {NAVBAR_TABS.map(tab => (
                        <li key={tab.text}>
                            <Link
                                className=""
                                href={tab.href}
                            >
                                {tab.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button
                    type="light"
                >
                    Work with us
                </Button>
            </nav>
        </header>
    )
}