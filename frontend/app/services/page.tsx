import NavbarSection from '@/components/Services/NavbarSection';
import ServicesGrid from '@/components/Services/ServicesGrid';
import Footer from '@/components/Footer';
import { getServices } from '@/server/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Sansa Digital',
  description: 'Explore our full range of digital services including web development, design, SEO, mobile apps, IT support, and more.',
  robots: 'index, follow',
  metadataBase: new URL('https://sansadigital.com'),
  alternates: { canonical: '/services' },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      <NavbarSection services={services} />
      <main className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <ServicesGrid services={services} />
      </main>
      <Footer />
    </div>
  );
}
