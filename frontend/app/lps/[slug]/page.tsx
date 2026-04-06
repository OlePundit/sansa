import { getLP } from "@/server/lpDetail";
import he from "he";
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

export default async function LPPage({ params }: LPPageProps) {
  const { slug } = await params;
  console.log('🔍 Slug:', slug);

  const [lp, services] = await Promise.all([
    getLP(slug),
    getServices(),
  ]);

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
        thumbnail="/default-image.png"
        title={lp.title ?? ''}
        intro={lp.intro ?? ''}
      />

      <main className="flex flex-col justify-center items-center w-full lg:w-3/4 mx-auto">
        <InfoSection
          img2={lp.img2 || "/default-info-image.png"}
          title1={lp.title1 || ""}
          benefits={lp.benefits || ""}
        />

        <InfoSection2
          img3={lp.img3 || "/default-info-image.png"}
          title2={lp.title2 || ""}
          benefits2={he.decode(lp.benefits2 || "")}
        />

        <FaqSection
          faq1={lp.faq1}
          ans1={he.decode(lp.ans1 || "")}
          faq2={lp.faq2}
          ans2={he.decode(lp.ans2 || "")}
          faq3={lp.faq3}
          ans3={he.decode(lp.ans3 || "")}
          faq4={lp.faq4}
          ans4={he.decode(lp.ans4 || "")}
          faq5={lp.faq5}
          ans5={he.decode(lp.ans5 || "")}
        />

        <div className="mt-10 flex mb-10">
          <QuoteButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
