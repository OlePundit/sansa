import NavbarSection from "@/components/Contact/NavbarSection";
import SuccessMessage from "@/components/Contact/SuccessMessage";
import { getServices } from "@/server/services";

export default async function ContactPage() {
    const services = await getServices();

    return (
        <div>
            <NavbarSection services={services} />
            <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
            <SuccessMessage />
            </main>

            
            {/* Additional about page content can go here */}
        </div>
    );
}