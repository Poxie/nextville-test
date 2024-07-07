import BrushIllustration from "@/assets/illustrations/BrushIllustration";

export default function HomeHero() {
    return(
        <section className="h-[85vh] flex items-center justify-center bg-dark text-light">
            <div className="-mt-[5.1vw] w-[650px] flex flex-col justify-center max-w-main text-center">
                <div className="relative flex justify-center">
                    <h1 className="relative flex gap-6 text-4xl sm:text-5xl font-bold">
                        We invest in
                        {' '}
                        <span className="relative">
                            <BrushIllustration className="absolute -top-3.5 -right-4 w-[110px] sm:-top-2 sm:-right-6 sm:w-[unset]" />
                            <span className="relative text-dark">
                                you.
                            </span>
                        </span>
                    </h1>
                </div>
                <p className="mt-4 text-lg sm:mt-6 sm:text-xl font-light">
                    We truly believe in the mission of the companies we invest in. And above that, we truly believe in you as the person to make the company succeed.
                </p>
            </div>
        </section>
    )
}