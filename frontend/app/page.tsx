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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sansa Digital',
  description: 'We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.',
  keywords: ['web development', 'web design', 'graphic design', 'SEO', 'digital marketing', 'Kenya'],
  authors: [{ name: 'Sansa Digital' }],
  robots: 'index, follow',
  
  // Open Graph
  openGraph: {
    type: 'website',
    title: 'Sansa Digital',
    description: 'We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.',
    images: [
      {
        url: 'https://sansadigital.com/storage/twitter.png',
        width: 1200,
        height: 630,
        alt: 'Sansa Digital',
      },
    ],
    url: 'https://sansadigital.com',
    siteName: 'Sansa Digital',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: 'sansadigital.com',
    creator: '@salvacar_ke',
    title: 'Sansa Digital',
    description: 'We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.',
    images: ['https://sansadigital.com/storage/twitter.png'],
  },
  
  // Additional metadata
  metadataBase: new URL('https://sansadigital.com'),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1',
};

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

