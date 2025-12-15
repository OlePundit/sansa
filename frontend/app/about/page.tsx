import NavbarSection from "@/components/About/NavbarSection";
import SectionInfo from "@/components/About/SectionInfo";
import EquipSection from "@/components/About/EquipSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/About/QuoteSection";
import StatsSection from "@/components/About/StatsSection";
import Footer from "@/components/Footer";
import { getServices } from "@/server/services";

export default async function AboutPage() {
    const services = await getServices();
    return (
        <div>
            <NavbarSection services={services} />
            <main className="flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto">

            <SectionInfo />
            <EquipSection />
            <ProjectsSection />
            <StatsSection />
            <QuoteSection />
            </main>
            <Footer />

            
            {/* Additional about page content can go here */}
        </div>
    );
}