import Button from "@/components/button";

export default function WhoWeAreCard() {
    return(
        <div className="flex-1 p-8 rounded-xl bg-light shadow">
            <h2 className="text-2xl sm:text-3xl font-semibold">
                Who are Nextville?
            </h2>
            <p className="mt-2 sm:text-lg leading-7 sm:leading-8">
                Nextville är ett bolag som verkar inom affärsutveckling, teknikutveckling, marknadsstrategi, markandsföring och konsultation. Vi jobbar för att se till att framtiden ser ljusare ut än gårdagen. Därför lägger vi mycket resurser på AI och förnybara energiresurser.
            </p>
            <Button className="mt-5 w-full sm:w-[unset]">
                Work with us
            </Button>
        </div>
    )
}