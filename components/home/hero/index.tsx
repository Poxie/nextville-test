import BrushIllustration from "@/assets/illustrations/BrushIllustration";
import HeroIllustration from "./HeroIllustration";

export default function HomeHero() {
    return(
        <section className="h-[115vh] sm:h-[90vh] flex items-center justify-center bg-dark text-light">
            <div className="main-width -mt-[3.1vw] sm:flex items-center justify-between gap-16">
                <div className="w-[550px] max-w-full mb-12 sm:mb-0">
                    <div className="relative flex justify-center">
                        <h1 className="relative flex flex-wrap gap-3 text-4xl lg:text-6xl font-bold">
                            We invest in a
                            {' '}
                            <span className="mr-3 relative">
                                <BrushIllustration className="absolute -top-5 -right-3 w-[190px] lg:-top-3 lg:-right-4 lg:w-[unset]" />
                                <span className="relative text-dark">
                                    brighter
                                </span>
                            </span>
                            future.
                        </h1>
                    </div>
                    <p className="text-lg mt-6 sm:text-xl font-light">
                        We truly believe in the mission of the companies we invest in. And above that, we truly believe in you as the person to make the company succeed.
                    </p>
                </div>
                <HeroIllustration />
            </div>
        </section>
    )
}