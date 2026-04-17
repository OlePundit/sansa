import BlogThumbnail from '@/components/Blog/BlogThumbnail';
import RelatedBlogs from '@/components/Blog/RelatedBlogs';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getServices } from '@/server/services';
import { getBlog, getBlogData } from '@/server/blogDetail';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

const BASE_URL = 'https://sansadigital.com';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: 'Blog Not Found', description: 'The requested blog post could not be found.' };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const imageUrl = blog.thumbnail
    ? `${BASE_URL}/storage/${blog.thumbnail}`
    : `${BASE_URL}/storage/twitter.png`;
  const pageUrl = `${BASE_URL}/blogs/${blog.slug}`;

  return {
    title: `${blog.title} — Sansa Digital`,
    description: blog.meta_description || blog.description || blog.title,
    robots: 'index, follow',
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.meta_description || blog.description || blog.title,
      images: [imageUrl, ...previousImages],
      url: pageUrl,
      siteName: 'Sansa Digital',
      publishedTime: blog.created_at || new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.meta_description || blog.description || blog.title,
      images: [imageUrl],
      site: '@sansadigital',
      creator: '@salvacar_ke',
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [blog, services, allBlogs] = await Promise.all([
    getBlog(slug),
    getServices(),
    getBlogData(),
  ]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-2xl font-bold mb-2">Blog post not found</p>
        <Link href="/blogs" className="text-[#2c96e2] hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: `${BASE_URL}/blogs/${blog.slug}` },
    ],
  };

const formattedDate = blog.created_at
  ? new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  : null;

const formattedUpdatedDate = blog.updated_at && blog.updated_at !== blog.created_at
  ? new Date(blog.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  : null;

  return (
    <div className="min-h-screen bg-[#171717]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      {blog.thumbnail && (
        <BlogThumbnail thumbnail={blog.thumbnail} title={blog.title} services={services} />
      )}

      {/* Content */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
          {blog.category && (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-gray-400">{blog.category}</span>
            </>
          )}
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <span className="text-gray-300 truncate max-w-[200px]">{blog.title}</span>
        </nav>

        {/* Category + date meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {blog.category && (
            <span className="inline-flex items-center bg-[#2c96e2]/10 border border-[#2c96e2]/25 text-[#2c96e2] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
          )}
          {blog.sub_category && (
            <span className="inline-flex items-center bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
              {blog.sub_category}
            </span>
          )}
          {formattedDate && (
            <span className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Clock className="w-3.5 h-3.5" />
              Published: {formattedDate}
            </span>
          )}
          {formattedUpdatedDate && (
            <span className="flex items-center gap-1.5 text-gray-500 text-xs ml-0 sm:ml-2">
              <Clock className="w-3.5 h-3.5" />
              Updated: {formattedUpdatedDate}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          {blog.title}
        </h1>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#2c96e2]/50 via-white/10 to-transparent mb-10" />

        {/* Rich body */}
        <article className="rich-content text-gray-300 text-base sm:text-lg leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </article>

        {/* CTA block */}
        <div className="mt-14 mb-4 rounded-2xl bg-gradient-to-br from-[#193155]/80 to-[#0d1a2d]/80 border border-white/8 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Need a digital solution?</h3>
            <p className="text-gray-400 text-sm">Let Sansa Digital help bring your project to life.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0">
            <button className="cursor-pointer flex items-center gap-2 bg-[#2c96e2] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2f976b] transition-colors duration-300 shadow-lg shadow-[#2c96e2]/20 text-sm">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </main>

      {/* Related posts */}
      <div className="w-full border-t border-white/5">
        <RelatedBlogs blogs={allBlogs} currentSlug={slug} />
      </div>

      <Footer />
    </div>
  );
}
