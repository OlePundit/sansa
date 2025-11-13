import NavbarSection from "@/components/About/NavbarSection";
import SectionInfo from "@/components/About/SectionInfo";
import EquipSection from "@/components/About/EquipSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import StatsSection from "@/components/About/StatsSection";

import { getAboutData } from "@/server/about";

export default async function AboutPage() {
    const { services } = await getAboutData();
    return (
        <div>
            <NavbarSection services={services} />
            <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">

            <SectionInfo />
            <EquipSection />
            <ProjectsSection />
            <StatsSection />
            <QuoteSection />
            </main>

            
            {/* Additional about page content can go here */}
        </div>
    );
}