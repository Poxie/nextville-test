"use client";
import WaveIllustration from "@/assets/illustrations/WaveIllustration";
import { useEffect, useRef } from "react";
import WhoWeAreCard from "./WhoWeAreCard";
import WhoWeAreImage from "./WhoWeAreImage";

const SCALE_FACTOR = .5;
export default function WhoWeAre() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if(!svgRef.current) return;

            // ScaleX to 5 when the user scrolls 50% of the screen
            const scale = (window.scrollY / 100) * SCALE_FACTOR + 1;
            svgRef.current.style.transform = `scaleX(${scale})`; 
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return(
        <section className="relative">
            <div className="absolute w-full bottom-[calc(100%-1px)] overflow-hidden">
                <WaveIllustration ref={svgRef} pathClassName="fill-light-secondary" />
            </div>
            <div className="overflow-hidden">
                <div className="p-section main-width flex items-center sm:items-end lg:items-start gap-16 flex-col lg:flex-row rounded-lg">
                    <WhoWeAreCard />
                    <WhoWeAreImage />
                </div>
            </div>
        </section>
    )
}