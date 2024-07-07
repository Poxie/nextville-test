import { twMerge } from "tailwind-merge";

export default function SectionHeader({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) {
    return(
        <div className={twMerge(
            "flex justify-center",
            className,
        )}>
            <h2 className="relative px-8 text-2xl sm:text-3xl text-center uppercase font-semibold tracking-widest bg-light-secondary">
                {children}
                <div className="bg-dark w-[calc(100%+3rem)] h-[1px] -z-[1] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
            </h2>
        </div>
    )
}