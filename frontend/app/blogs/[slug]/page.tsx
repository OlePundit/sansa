import Image from "next/image";
import BlogThumbnail from "@/components/Blog/BlogThumbnail";
import { getServices } from "@/server/services";
import { getBlog } from "@/server/blogDetail";
import Footer from "@/components/Footer";
import type { Metadata, ResolvingMetadata } from 'next';

const BASE_URL = 'https://sansadigital.com';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for the blog post
export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Previous metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  // Construct image URL
  const imageUrl = blog.thumbnail 
    ? `${BASE_URL}/storage/${blog.thumbnail}`
    : `${BASE_URL}/storage/twitter.png`; // Fallback image
  
  // Construct page URL
  const pageUrl = `${BASE_URL}/blogs/${blog.slug}`;
  
  return {
    title: blog.title,
    description: blog.description || blog.title,
    robots: 'index, follow',
    
    // Open Graph
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.description || blog.title,
      images: [imageUrl, ...previousImages],
      url: pageUrl,
      siteName: 'Sansa Digital',
      publishedTime: blog.created_at || new Date().toISOString(),
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.title,
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

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  console.log('🔍 Slug:', slug);
  
  const blog = await getBlog(slug);
  const services = await getServices();

  if (!blog) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-red-500 text-xl">Blog not found</p>
        <p className="text-gray-500">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div>
        {blog.thumbnail && (
          <BlogThumbnail thumbnail={blog.thumbnail} title={blog.title} services={services} />
        )}

        <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
          <div className="w-full flex justify-start items-start mx-auto">
            <div className="lg:w-9/12 w-full flex flex-col text-white font-montserrat text-[20px] mt-[100px] px-6">

              <h1 className="text-4xl font-ebGaramond font-bold mb-6">
                {blog.title}
              </h1>

              <div
                dangerouslySetInnerHTML={{ __html: blog.body }}
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