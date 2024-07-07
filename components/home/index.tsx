import HomeHero from "./hero";
import WhoWeAre from "./who-we-are";

export default function Home() {
    return(
        <main className="h-[500vh]">
            <HomeHero />
            <WhoWeAre />
        </main>
    )
}