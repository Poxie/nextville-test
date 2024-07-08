import HomeHero from "./hero";
import HomeModel from "./model";
import HomeValues from "./values";
import WhoWeAre from "./who-we-are";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <WhoWeAre />
            <HomeValues />
            <HomeModel />
        </main>
    )
}