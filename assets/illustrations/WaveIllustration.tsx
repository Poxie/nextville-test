import React from "react";

type Props = {
    className?: string;
    pathClassName?: string;
}
const CloudIllustration = React.forwardRef<SVGSVGElement, Props>(({ className, pathClassName }, ref) => {
    return(
        <svg ref={ref} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 74" fill="none">
            <path className={pathClassName} d="M711 0C354.5 -2.65461e-05 0 74 0 74H1440C1440 74 1067.5 2.65461e-05 711 0Z"/>
        </svg>
    )
})

export default CloudIllustration;