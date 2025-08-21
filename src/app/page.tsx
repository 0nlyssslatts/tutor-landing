import { Footer } from "@/sections/Footer/Footer";
import { Header } from "@/sections/Header/Header";
import { HowworksSection } from "@/sections/HowworksSection/HowworksSection";
import { IntroSection } from "@/sections/IntroSection/IntroSection";
import { WhoamiSection } from "@/sections/WhoamiSection/WhoamiSection";

export default function Home() {
    return (
        <>
            <Header />
            <IntroSection />
            <WhoamiSection />
            <HowworksSection />
            <Footer />
        </>
    );
}
