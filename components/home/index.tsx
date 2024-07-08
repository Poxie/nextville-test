import HomeHero from "./hero";
import HomeValues from "./values";
import WhoWeAre from "./who-we-are";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <WhoWeAre />
            <HomeValues />
        </main>
    )
}