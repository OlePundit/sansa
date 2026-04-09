import { getLP } from "@/server/lpDetail";

function decodeHtml(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}
import NavbarSection from "@/components/LP/NavbarSection";
import { getServices } from "@/server/services";
import InfoSection from "@/components/LP/InfoSection";
import InfoSection2 from "@/components/LP/InfoSection2";
import FaqSection from "@/components/LP/FaqSection";
import Footer from "@/components/Footer";
import QuoteButton from "@/components/QuoteButton";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = 'https://sansadigital.com';

interface LPPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: LPPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const lp = await getLP(slug);

  if (!lp) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const pageUrl = `${BASE_URL}/lps/${lp.slug}`;

  return {
    title: lp.title ?? 'Sansa Digital',
    description: lp.meta_description ?? lp.intro ?? 'We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.',
    robots: 'index, follow',

    openGraph: {
      type: 'website',
      title: lp.title ?? 'Sansa Digital',
      description: lp.meta_description ?? lp.intro ?? '',
      images: [`${BASE_URL}/storage/twitter.png`, ...previousImages],
      url: pageUrl,
      siteName: 'Sansa Digital',
    },

    twitter: {
      card: 'summary_large_image',
      site: 'sansadigital.com',
      creator: '@salvacar_ke',
      title: lp.title ?? 'Sansa Digital',
      description: lp.meta_description ?? lp.intro ?? '',
      images: [`${BASE_URL}/storage/twitter.png`],
    },

    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: pageUrl,
    },
  };
}

const API_URL = process.env.APP_URL ?? 'http://127.0.0.1:8000';

function toAbsolute(path?: string): string {
  if (!path) return '/default-image.png';
  if (path.startsWith('http')) return path;
  return `${API_URL}/storage/${path}`;
}

export default async function LPPage({ params }: LPPageProps) {
  const { slug } = await params;
  console.log('🔍 Slug:', slug);

  const [lp, services] = await Promise.all([
    getLP(slug),
    getServices(),
  ]);
console.log('📦 Raw LP from API:', JSON.stringify(lp, null, 2));
  if (!lp) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-red-500 text-xl">Landing Page not found</p>
        <p className="text-gray-500">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div>
      <NavbarSection
        services={services}
        img1={toAbsolute(lp.img1)}
        title={lp.title ?? ''}
        intro={lp.intro ?? ''}
      />

      <main className="flex flex-col w-full max-w-7xl mx-auto">
        <InfoSection
          img2={toAbsolute(lp.img2)}
          title1={lp.title1 || ""}
          benefits={lp.benefits || ""}
        />

        <InfoSection2
          img3={toAbsolute(lp.img3)}
          title2={lp.title2 || ""}
          benefits2={decodeHtml(lp.benefits2 || "")}
        />

        <FaqSection
          faq1={lp.faq1}
          ans1={decodeHtml(lp.ans1 || "")}
          faq2={lp.faq2}
          ans2={decodeHtml(lp.ans2 || "")}
          faq3={lp.faq3}
          ans3={decodeHtml(lp.ans3 || "")}
          faq4={lp.faq4}
          ans4={decodeHtml(lp.ans4 || "")}
          faq5={lp.faq5}
          ans5={decodeHtml(lp.ans5 || "")}
        />

        <div className="flex justify-center pb-16">
          <QuoteButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
