import NavbarSection from "@/components/Contact/NavbarSection";
import SuccessMessage from "@/components/Contact/SuccessMessage";
import { getServices } from "@/server/services";
import { Metadata } from "next";


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