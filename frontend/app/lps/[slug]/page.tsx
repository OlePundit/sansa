import Image from "next/image";
import { getLp } from "@/server/lpDetail";
import NavbarSection from "@/components/LP/NavbarSection";
import { getServices } from "@/server/services";
import InfoSection from "@/components/LP/InfoSection";
import InfoSection2 from "@/components/LP/InfoSection2";
import FaqSection from "@/components/LP/FaqSection";

export default async function LPPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const lp = await getLp(slug);
    const services = await getServices();

    if (!lp) {
        return (
            <div className="container mx-auto py-16">
                <p className="text-red-500 text-xl">Landing Page not found</p>
                <p className="text-gray-500">Slug: {slug}</p>
            </div>
        );
    }

    return (
        <div>
            <NavbarSection
                services={services}
                thumbnail={lp.thumbnail || "/default-image.png"}
                title={lp.title}
                intro={lp.intro}
            />

            <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
                <InfoSection
                    img2={lp.img2 || "/default-info-image.png"}
                    title1={lp.title1}
                    benefits={lp.benefits}
                />

                <InfoSection2
                    img3={lp.img3 || "/default-info-image.png"}
                    title2={lp.title2}
                    benefits2={lp.benefits2}
                />
                <FaqSection 
                    faq1={lp.faq1}
                    ans1={lp.ans1}  
                    faq2={lp.faq2}
                    ans2={lp.ans2}     
                    faq3={lp.faq3}
                    ans3={lp.ans3} 
                    faq4={lp.faq4}
                    ans4={lp.ans4}          
                    faq5={lp.faq5}
                    ans5={lp.ans5}      
                />
            </main>
        </div>
    );
}
