import WaveIllustration from "@/assets/illustrations/WaveIllustration";
import Image from "next/image";

export default function Footer() {
    return(
        <footer className="py-12 relative flex flex-col items-center gap-5 bg-dark">
            {/* <WaveIllustration 
                className="absolute top-[-1px] rotate-180"
                pathClassName="fill-light-secondary"
            /> */}
            <Image 
                src="/logo-with-text.png"
                width={129}
                height={54}
                alt="Logo with text"
            />
            <span className="text-sm text-light">
                Copyright © {new Date().getFullYear()} Nextville. All rights reserved.
            </span>
        </footer>
    )
}