import HomeHero from "./hero";
import HomeWhyUs from "./why-us";

export default function Home() {
    return(
        <main className="h-[500vh]">
            <HomeHero />
            <HomeWhyUs />
        </main>
    )
}