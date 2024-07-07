"use client";
import CloudIllustration from "@/assets/illustrations/CloudIllustration";
import { WhyCard } from ".";
import { useEffect, useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function WhyUsCard({ title, description, parallax }: WhyCard) {
    const ref = useRef<HTMLDivElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);

    const { initialState } = useAnimateIntoView(ref, { hideOnScroll: true });

    useEffect(() => {
        const onScroll = () => {
            if(!ref.current) return;

            const translate = -(window.scrollY * parallax);
            ref.current.style.transform = `translateY(${translate}px)`;
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div 
            className="relative"
            ref={parallaxRef}
        >
            <div 
                ref={ref}
                style={initialState}
            >
                <CloudIllustration className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" />
                <div className="relative">
                    <h2 className="text-2xl sm:text-3xl">
                        {title}
                    </h2>
                    <p className="mt-4 sm:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}