import { getHomeData } from '@/server/home';
import HomeClient from '@/components/HomeClient';
import InfoSection from '@/components/InfoSection';
import ServicesSection from '@/components/ServicesSection';
import PricesSection from '@/components/PricesSection';
import ProjectsSection from '@/components/ProjectsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { PackagesSection } from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialSection';
import QuoteSection from '@/components/QuoteSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import { getServices } from "@/server/services";

export default async function Home() {
  const services = await getServices();


  return (
    <>
    <div className="w-full">
      <HomeClient services={services} />
      
      <main className="flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto">
        <InfoSection />
        <ServicesSection />
        <PricesSection />
        <ProjectsSection />
        <PortfolioSection />
        {/* <PackagesSection webs={webs} digitals={digitals} /> */}
        <TestimonialsSection />
        <QuoteSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>

    </>
  );
}