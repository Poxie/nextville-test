"use client";
import HouseBrightIllustration from "@/assets/illustrations/HouseBrightIllustration";
import HouseDarkIllustration from "@/assets/illustrations/HouseDarkIllustration";
import { useEffect, useRef } from "react";

const BRIGHT_SCROLL_AMOUNT = 200;
export default function HeroIllustration() {
    const brightRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if(!brightRef.current) return;

            const scroll = window.scrollY;

            const opacityValue = (scroll / BRIGHT_SCROLL_AMOUNT) * 100;
            if(opacityValue > 100) return brightRef.current.style.opacity = '1';
            if(opacityValue < 0) return brightRef.current.style.opacity = '0';

            brightRef.current.style.opacity = `${opacityValue / 100}`;
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div className="relative">
            <HouseDarkIllustration className="w-full sm:w-[300px] aspect-square" />
            <HouseBrightIllustration 
                className="w-full absolute top-0 opacity-0"
                ref={brightRef}
            />
        </div>
    )
}