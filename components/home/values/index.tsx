import SectionHeader from "@/components/section-header";
import HomeValuesList from "./HomeValuesList";

export default function HomeValues() {
    return(
        <section className="p-section">
            <div className="mb-12 main-width text-center">
                <SectionHeader>
                    Improving Today
                </SectionHeader>
                <span className="mt-4 block text-lg">
                    Genom att vara..
                </span>
            </div>
            <HomeValuesList />
        </section>
    )
}