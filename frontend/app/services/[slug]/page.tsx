import BlogThumbnail from "@/components/Blog/BlogThumbnail";
import { getServices } from "@/server/services";
import { getService } from "@/server/serviceDetail";
import Footer from "@/components/Footer";
import QuoteButton from "@/components/QuoteButton";
import type { Metadata, ResolvingMetadata } from 'next';

const BASE_URL = 'https://sansadigital.com';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for the service page
export async function generateMetadata(
  { params }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  // Previous metadata (optional, if you want to inherit parent images)
  const previousImages = (await parent).openGraph?.images || [];

  // Construct image URL
  const imageUrl = service.thumbnail
    ? `${BASE_URL}/storage/${service.thumbnail}`
    : `${BASE_URL}/storage/twitter.png`; // Fallback image

  // Construct page URL
  const pageUrl = `${BASE_URL}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.meta_description || service.description || service.title,
    robots: 'index, follow',

    // Open Graph
    openGraph: {
      type: 'article', // or 'website' – adjust based on content type
      title: service.title,
      description: service.meta_description || service.description || service.title,
      images: [imageUrl, ...previousImages],
      url: pageUrl,
      siteName: 'Sansa Digital',
      publishedTime: service.created_at || new Date().toISOString(),
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.meta_description || service.description || service.title,
      images: [imageUrl],
      site: '@sansadigital',
      creator: '@salvacar_ke',
    },

    // Additional metadata
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  console.log('🔍 Slug:', slug);

  // Parallel data fetching
  const [service, services] = await Promise.all([
    getService(slug),
    getServices(),
  ]);

  if (!service) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-red-500 text-xl">Service not found</p>
        <p className="text-gray-500">Slug: {slug}</p>
      </div>
    );
  }

  const breadcrumbItems: { name: string; url: string }[] = [
    { name: 'Home', url: BASE_URL },
    { name: 'Services', url: `${BASE_URL}/services` },
  ];
  if (service.category && service.sub_category) {
    breadcrumbItems.push({ name: `${service.category} > ${service.sub_category}`, url: `${BASE_URL}/services?category=${encodeURIComponent(service.category)}&sub_category=${encodeURIComponent(service.sub_category)}` });
  } else if (service.category) {
    breadcrumbItems.push({ name: service.category, url: `${BASE_URL}/services?category=${encodeURIComponent(service.category)}` });
  }
  breadcrumbItems.push({ name: service.title, url: `${BASE_URL}/services/${service.slug}` });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {service.thumbnail && (
        <BlogThumbnail thumbnail={service.thumbnail} title={service.title} services={services} />
      )}

      <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
        <div className="w-full flex justify-start items-start mx-auto">
          <div className="lg:w-9/12 w-full flex flex-col text-white font-montserrat text-[20px] mt-[100px] px-6">
            <h1 className="text-4xl font-ebGaramond font-bold mb-6">
              {service.title}
            </h1>

            <div className="rich-content" dangerouslySetInnerHTML={{ __html: service.body }} />

            <div className="mt-10 flex">
              <QuoteButton />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}