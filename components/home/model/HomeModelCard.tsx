import { twMerge } from "tailwind-merge";
import { ModelCard } from ".";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function HomeModelCard({ reversed, card: { title, description, illustration } }: {
    card: ModelCard;
    reversed: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { initialState } = useAnimateIntoView(ref, { hideOnScroll: true });

    return(
        <div
            ref={ref}
            style={initialState}
            className={twMerge(
                "flex justify-between items-center gap-8",
                reversed ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row",
            )}
        >
            <div className="md:w-[450px]">
                <h2 className="text-4xl font-medium">
                    {title}
                </h2>
                <p className="mt-3 text-xl leading-8">
                    {description}
                </p>
            </div>
            {illustration}
        </div>
    )
}