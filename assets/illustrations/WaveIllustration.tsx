import React from "react";

type Props = {
    className?: string;
    pathClassName?: string;
}
const WaveIllustration = React.forwardRef<SVGSVGElement, Props>(({ className, pathClassName }, ref) => {
    return(
        <svg ref={ref} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 103" fill="none">
            <path className={pathClassName} d="M720 0C363.5 -2.65461e-05 0 103 0 103H1440C1440 103 1076.5 2.65461e-05 720 0Z"/>
        </svg>
    )
})

export default WaveIllustration;