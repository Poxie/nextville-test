"use client";
import BuildIllustration from "@/assets/illustrations/BuildIllustration"
import DreamIllustration from "@/assets/illustrations/DreamIllustration"
import GrowIllustration from "@/assets/illustrations/GrowIllustration"
import HomeModelCard from "./HomeModelCard";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import { twMerge } from "tailwind-merge";

const MODEL_CARDS = [
    { title: 'Dream it.', description: 'Alla företag börjar med ett problem, och en dröm att lösa detta problem. Det är första steget för alla företag.', illustration: <DreamIllustration className="md:max-w-[440px]" /> },
    { title: 'Build it.', description: 'När idén har blomstrat är det dags att bygga företaget. Detta är ett av de svåraste stegen som många fastnar på.', illustration: <BuildIllustration className="md:max-w-[340px]" /> },
    { title: 'Grow it.', description: 'Du har byggt ditt drömföretag - uppnått din dröm. Nu är det dags att ta det till nästa nivå.', illustration: <GrowIllustration className="md:max-w-[450px]" /> },
]
export type ModelCard = typeof MODEL_CARDS[0];

const HEADER_TEXT = 'Vår företagsmodell';
export default function HomeModel() {
    const headerRef = useRef<HTMLHeadingElement>(null);

    const letterRefs = HEADER_TEXT.split('').map(() => useRef<HTMLDivElement>(null));

    const { initialState } = useAnimateIntoView(headerRef);

    for(let i = 0; i < letterRefs.length; i++) {
        useAnimateIntoView(letterRefs[i], { siblingRef: headerRef, delay: i * 30, hideOnScroll: true, });
    }

    return(
        <section className="main-width p-section">
            <h2 
                className="flex justify-center flex-wrap text-c-primary text-5xl text-center uppercase font-bold"
                style={initialState}
                ref={headerRef}
            >
                {HEADER_TEXT.split('').map((letter, index) => {
                    if(letter === ' ') {
                        return(
                            <span className="block w-0 basis-[100%] lg:basis-0 lg:mx-2" />
                        )
                    }
                    return(
                        <span 
                            key={index}
                            ref={letterRefs[index]}
                            style={initialState}
                            className={twMerge(
                                letter === ' ' && 'block mx-2',
                                index > 3 && index < 12 && 'hidden sm:block'
                            )}
                        >
                            {letter}
                        </span>
                    )
                })}
            </h2>
            <ul className="mt-24 grid gap-28">
                {MODEL_CARDS.map((card, index) => (
                    <li key={card.title}>
                        <HomeModelCard 
                            card={card}
                            reversed={index % 2 !== 0}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}