import Image from "next/image";
import Link from "next/link";
import Button from "../button";

const NAVBAR_TABS = [
    { text: 'About us', href: '/about' },
    { text: 'Companies', href: '/companies' },
]
export default function Navbar() {
    return(
        <header className="py-6 sm:p-6 main-width sm:w-full sm:max-w-[unset] absolute left-2/4 -translate-x-2/4 flex items-center justify-between text-light">
            <Image 
                className="sm:-mt-4"
                src="/logo.png"
                width={137}
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