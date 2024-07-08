import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const SectionHeader = React.forwardRef<HTMLDivElement, Props>(({ children, className, style }, ref) => {
    return(
        <div 
            ref={ref}
            style={style}
            className={twMerge(
                "flex justify-center",
                className,
            )}
        >
            <h2 className="relative px-8 text-2xl sm:text-3xl text-center uppercase font-semibold tracking-widest bg-light-secondary">
                {children}
                <div className="bg-dark w-[calc(100%+3rem)] h-[1px] -z-[1] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
            </h2>
        </div>
    )
});
SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;