import BlogThumbnail from '@/components/Blog/BlogThumbnail';
import RelatedServices from '@/components/Services/RelatedServices';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getServices } from '@/server/services';
import { getService } from '@/server/serviceDetail';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

const BASE_URL = 'https://sansadigital.com';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return { title: 'Service Not Found', description: 'The requested service could not be found.' };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const imageUrl = service.thumbnail
    ? `${BASE_URL}/storage/${service.thumbnail}`
    : `${BASE_URL}/storage/twitter.png`;
  const pageUrl = `${BASE_URL}/services/${service.slug}`;

  return {
    title: `${service.title} — Sansa Digital`,
    description: service.meta_description || service.description || service.title,
    robots: 'index, follow',
    openGraph: {
      type: 'article',
      title: service.title,
      description: service.meta_description || service.description || service.title,
      images: [imageUrl, ...previousImages],
      url: pageUrl,
      siteName: 'Sansa Digital',
      publishedTime: service.created_at || new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.meta_description || service.description || service.title,
      images: [imageUrl],
      site: '@sansadigital',
      creator: '@salvacar_ke',
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [service, services] = await Promise.all([
    getService(slug),
    getServices(),
  ]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-2xl font-bold mb-2">Service not found</p>
        <Link href="/services" className="text-[#2f976b] hover:underline">← Back to Services</Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${BASE_URL}/services/${service.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      {service.thumbnail && (
        <BlogThumbnail thumbnail={service.thumbnail} title={service.title} services={services} />
      )}

      {/* Content */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          {service.category && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-400">{service.category}</span>
            </>
          )}
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate max-w-[200px]">{service.title}</span>
        </nav>

        {/* Category badge */}
        {(service.category || service.sub_category) && (
          <div className="flex items-center gap-2 mb-4">
            {service.category && (
              <span className="inline-flex items-center bg-[#2c96e2]/10 border border-[#2c96e2]/25 text-[#2c96e2] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {service.category}
              </span>
            )}
            {service.sub_category && (
              <span className="inline-flex items-center bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
                {service.sub_category}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          {service.title}
        </h1>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#2f976b]/50 via-white/10 to-transparent mb-10" />

        {/* Rich body content */}
        <article className="rich-content text-gray-300 text-base sm:text-lg leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: service.body }} />
        </article>

        {/* CTA block */}
        <div className="mt-14 mb-4 rounded-2xl bg-gradient-to-br from-[#193155]/80 to-[#0d1a2d]/80 border border-white/8 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to get started?</h3>
            <p className="text-gray-400 text-sm">Talk to us about your project and let's make it happen.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact">
              <button className="cursor-pointer flex items-center gap-2 bg-[#2f976b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#27825c] transition-colors duration-300 shadow-lg shadow-[#2f976b]/20 text-sm">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="https://wa.me/+254112128055" target="_blank">
              <button className="cursor-pointer flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/15 transition-colors duration-300 text-sm">
                <Phone className="w-4 h-4" /> WhatsApp Us
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Related services */}
      <div className="w-full border-t border-white/5">
        <RelatedServices services={services} currentSlug={slug} />
      </div>

      <Footer />
    </div>
  );
}
