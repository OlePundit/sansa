'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Blog, BlogGridProps } from '@/types';
import { urls } from '@/utils/urls';
import { useState } from 'react';

function BlogThumbnailImage({ thumbnail }: { thumbnail?: string }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const src = thumbnail ? urls.api.storage(thumbnail) : null;

  if (!src || error) {
    return (
      <div className="w-full h-44 bg-gradient-to-br from-[#193155] to-[#0d1a2d] flex items-center justify-center rounded-t-2xl">
        <div className="w-12 h-12 rounded-xl bg-[#2c96e2]/15 border border-[#2c96e2]/25 flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-[#2c96e2]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl">
      {loading && <div className="absolute inset-0 bg-[#193155] animate-pulse" />}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => { setError(true); setLoading(false); }}
      />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogGrid({ blogs }: BlogGridProps) {
  if (!blogs?.length) {
    return <div className="py-20 text-center text-gray-400">No blog posts found.</div>;
  }

  return (
    <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog: Blog) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group"
          >
            <Link
              href={`/blogs/${blog.slug}`}
              className="flex flex-col h-full bg-[#193155]/60 border border-white/8 rounded-2xl overflow-hidden hover:border-[#2c96e2]/40 transition-all duration-300 shadow-lg hover:shadow-[#2c96e2]/10 hover:shadow-xl"
            >
              <BlogThumbnailImage thumbnail={blog.thumbnail} />

              <div className="flex flex-col flex-1 p-5">
                {(blog.category || blog.sub_category) && (
                  <div className="flex items-center gap-2 mb-2">
                    {blog.category && (
                      <span className="text-xs font-medium text-[#2c96e2] uppercase tracking-wide">
                        {blog.category}
                      </span>
                    )}
                    {blog.category && blog.sub_category && (
                      <span className="text-xs text-gray-500">›</span>
                    )}
                    {blog.sub_category && (
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {blog.sub_category}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="text-white font-semibold text-lg mb-2 leading-snug group-hover:text-[#2c96e2] transition-colors duration-200">
                  {blog.title}
                </h3>

                {blog.excerpt && (
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {blog.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[#2c96e2] text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  {blog.created_at && (
                    <span className="flex items-center gap-1 text-gray-600 text-xs">
                      <Clock className="w-3 h-3" />
                      {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
