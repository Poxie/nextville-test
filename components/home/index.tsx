import HomeHero from "./hero";
import HomeValues from "./values";
import WhoWeAre from "./who-we-are";

export default function Home() {
    return(
        <main className="h-[500vh]">
            <HomeHero />
            <WhoWeAre />
            <HomeValues />
        </main>
    )
}