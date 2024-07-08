import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import { RefObject, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function ModelHeaderLetter({ letter, index, siblingRef }: {
    letter: string;
    index: number;
    siblingRef: RefObject<HTMLHeadingElement>;
}) {
    const ref = useRef<HTMLSpanElement>(null);

    const { initialState } = useAnimateIntoView(ref, { delay: index * 35, hideOnScroll: true, siblingRef });

    if(letter === ' ') {
        return(
            <span className="block w-0 basis-[100%] lg:basis-0 lg:mx-2" />
        )
    }
    return(
        <span 
            key={index}
            ref={ref}
            style={initialState}
            className={twMerge(
                letter === ' ' && 'block mx-2',
                index > 3 && index < 12 && 'hidden sm:block'
            )}
        >
            {letter}
        </span>
    )
}