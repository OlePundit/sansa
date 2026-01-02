<<<<<<< HEAD
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
import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';

export default async function Home() {
  // Fetch services with error handling at the data level
  const services = await getServices().catch((error) => {
    console.error('Failed to fetch services:', error);
    return []; // Return empty array as fallback
  });
  
  return (
    <div className="w-full">
      <ErrorBoundary 
        fallback={
          <div>
            {/* Fallback content when HomeClient fails */}
            <HomeClient services={[]} />
            <main className="flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto">
              <InfoSection />
              <ServicesSection />
              <PricesSection />
              <ProjectsSection />
              <PortfolioSection />
              <TestimonialsSection />
              <QuoteSection />
              <NewsletterSection />
            </main>
            <Footer />
          </div>
        }
      >
        <Suspense fallback={<Loading />}>
          <HomeClient services={services} />
        </Suspense>
      </ErrorBoundary>
      
      <main className="flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto">
        <InfoSection />
        <ServicesSection />
        <PricesSection />
        <ProjectsSection />
        <PortfolioSection />
        {/*
          <PackagesSection webs={[]} digitals={[]} />
        */}
        <TestimonialsSection />
        <QuoteSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
=======
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <p className="text-lg mb-4">
          This is your Next.js frontend with Laravel API backend.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link
            href="/admin"
            className="p-8 border-2 border-blue-500 rounded-lg hover:shadow-lg transition text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Admin Panel</h2>
            <p>Manage content, services, blogs, and orders</p>
          </Link>
          <Link
            href="/services"
            className="p-8 border rounded-lg hover:shadow-lg transition text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Public Site</h2>
            <p>View services and blog posts</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
>>>>>>> eaa606a95c18e97417951e5d3112476be20bc2c1
