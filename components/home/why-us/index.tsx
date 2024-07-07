"use client";
import { twMerge } from "tailwind-merge";
import WhyUsCard from "./WhyUsCard";
import { useEffect, useRef } from "react";
import WaveIllustration from "@/assets/illustrations/WaveIllustration";

const WHY_CARDS = [
    { title: 'Vi investerar vårt egna kapital.', description: 'Vi investerar endast våra egna pengar i ert företag - inga andra fonder är involverade. Därför ser vi verkligen potential i ert företag.', parallax: .09 },
    { title: 'Vi är alla entreprenörer.', description: 'Alla vi jobbar med och som är inblandade är själv entreprenörer på ett eller annat sätt. Du kan lita på att vi gör allt för att ta ert företag till nästa nivå.', parallax: .16 },
    { title: 'Vi jobbar för en bättre framtid.', description: 'Vi arbetar främst med företag vi ser har en ljus framtid och som kommer göra skillnad långsiktigt på vårt samhälle.', parallax: .22 },
]
export type WhyCard = typeof WHY_CARDS[number];

const OPACITY_OFFSET = .2;
const MAX_SCALE_X = 4;
const MIN_SCALE_X = 1;
export default function HomeWhyUs() {
    const ref = useRef<HTMLDivElement>(null);
    const layerSvgRef = useRef<SVGSVGElement>(null);
    const mainSvgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if(!ref.current || !layerSvgRef.current || !mainSvgRef.current) return;

            // Updating the opacity of the background div and the svg
            let opacity = 1 - ((window.scrollY / ref.current.getBoundingClientRect().top) - OPACITY_OFFSET);

            if(opacity < 0) opacity = 0;
            if(opacity > 1) return;

            ref.current.style.opacity = `${opacity}`;
            layerSvgRef.current.style.opacity = `${opacity}`;

            // Updating the scale of the svg
            let scale = MAX_SCALE_X - (opacity * 3);
            if(scale < MIN_SCALE_X) scale = MIN_SCALE_X;

            layerSvgRef.current.style.transform = `scaleX(${scale})`;
            mainSvgRef.current.style.transform = `scaleX(${scale})`;
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return(
        <section className="p-section pb-12 relative bg-c-primary">
            <div className="absolute left-0 bottom-full w-full h-[5.1vw] overflow-hidden">
                <WaveIllustration ref={mainSvgRef} pathClassName="fill-c-primary" className="absolute w-screen" />
                <WaveIllustration ref={layerSvgRef} pathClassName="fill-light" className="absolute w-screen" />
            </div>
            <div className="absolute w-full h-full top-0 left-0 bg-light pointer-events-none" ref={ref} />
            <h2 className="text-4xl sm:text-5xl text-center text-light">
                Varför vi sticker ut.
            </h2>
            <div className="overflow-hidden">
                <ul className="main-width mt-36 flex flex-col items-start gap-48 lg:gap-32">
                    {WHY_CARDS.map((card, index) => (
                        <li 
                            className={twMerge(
                                "w-[470px] max-w-full",
                                index % 2 !== 0 && 'self-end',
                            )}
                            key={card.title}
                        >
                            <WhyUsCard {...card} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}