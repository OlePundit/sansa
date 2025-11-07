import { getHomeData } from '@/server/home';
import HomeClient from '@/components/HomeClient';
import InfoSection from '@/components/InfoSection';
import ServicesSection from '@/components/ServicesSection';
import PricesSection from '@/components/PricesSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialSection';

export default async function Home() {
  const { packages, services } = await getHomeData({ webs: true });

  const webs = packages.filter(pkg => pkg.category === 'web design');
  const digitals = packages.filter(pkg => pkg.category === 'digital marketing');

  return (
    <>
      {/* Optional: if HomeClient handles client-only features (e.g. animations, interactivity) */}
      <HomeClient services={services} packages={packages} />

      <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
        <InfoSection />
        <ServicesSection services={services} />
        <PricesSection />
        <ProjectsSection />
        <PortfolioSection />
        <PackagesSection webs={webs} digitals={digitals} />
        <TestimonialsSection />
      </main>
    </>
  );
}
