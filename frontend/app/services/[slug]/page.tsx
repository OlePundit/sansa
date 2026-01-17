import Image from "next/image";
import BlogThumbnail from "@/components/Blog/BlogThumbnail";
import { getServices } from "@/server/services";
import { getService } from "@/server/serviceDetail";
import Footer from "@/components/Footer";
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  console.log('🔍 Slug:', slug);
  
  const service = await getService(slug);
  const services = await getServices();

  if (!service) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-red-500 text-xl">Service not found</p>
        <p className="text-gray-500">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div>
        {service.thumbnail && (
          <BlogThumbnail thumbnail={service.thumbnail} title={service.title} services={services} />
        )}

        <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
          <div className="w-full flex justify-start items-start mx-auto">
            <div className="lg:w-9/12 w-full flex flex-col text-white font-montserrat text-[20px] mt-[100px] px-6">

              <h1 className="text-4xl font-ebGaramond font-bold mb-6">
                {service.title}
              </h1>

              <div
                dangerouslySetInnerHTML={{ __html: service.body }}
              />

              <div className="mt-10 flex">
                <button
                  className="
                    bg-[#2c96e2]
                    text-white
                    font-bold
                    text-xl
                    rounded-md
                    mt-[100px]
                    mb-[100px]
                    px-6 
                    py-2
                    hover:bg-[#2f976b]
                    transition
                  "
                >
                  Request Quotation
                </button>
              </div>

            </div>
          </div>
        </main>
        <Footer />

        
        {/* Additional about page content can go here */}
    </div>

  );
}