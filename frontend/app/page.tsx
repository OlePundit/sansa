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

export default async function Home() {
  const { webs, digitals, services } = await getHomeData();

  // Debug: Check what we're actually getting
  console.log('Web packages after filtering:', webs);
  console.log('Digital packages after filtering:', digitals);
  console.log('Services:', services);

  return (
    <>
      <HomeClient services={services} packages={[...webs, ...digitals]} />
      
      <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
        <InfoSection />
        <ServicesSection services={services} />
        <PricesSection />
        <ProjectsSection />
        <PortfolioSection />
        <PackagesSection webs={webs} digitals={digitals} />
        <TestimonialsSection />
        <QuoteSection />
        <NewsletterSection />
      </main>
    </>
  );
}