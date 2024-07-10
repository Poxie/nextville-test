"use client";
import SectionHeader from "@/components/section-header";
import HomeValuesList from "./HomeValuesList";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function HomeValues() {
    const headerRef = useRef<HTMLDivElement>(null);
    const subHeaderRef = useRef<HTMLSpanElement>(null);

    const { initialState } = useAnimateIntoView(headerRef, { threshold: .9, hideOnScroll: true });
    useAnimateIntoView(subHeaderRef, { siblingRef: headerRef, threshold: .9, delay: 100, hideOnScroll: true });

    return(
        <section className="p-section pb-[1px]">
            <div className="mb-12 main-width text-center">
                <SectionHeader
                    style={initialState}
                    ref={headerRef}
                >
                    Improving Today
                </SectionHeader>
                <span 
                    className="mt-2 block text-lg"
                    style={initialState}
                    ref={subHeaderRef}
                >
                    Genom att vara...
                </span>
            </div>
            <HomeValuesList />
        </section>
    )
}