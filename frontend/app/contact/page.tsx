import NavbarSection from "@/components/Contact/NavbarSection";
import ContactSection from "@/components/Contact/ContactSection";
import { getServices } from "@/server/services";
import Footer from "@/components/Footer";

export default async function ContactPage() {
    const services = await getServices();

    return (
        <div>
            <NavbarSection services={services} />
            <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
            <ContactSection />
            </main>
            <Footer />
            
            {/* Additional about page content can go here */}
        </div>
    );
}