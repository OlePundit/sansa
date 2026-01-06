'use client'

import Link from "next/link";
import { Blog, BlogGridProps } from '@/types';
import { useState } from 'react';

export default function BlogGrid({ blogs }: BlogGridProps ) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 sm:py-50 gap-6">
      {blogs?.map((blog: Blog) => {
        // Debug log with TypeScript safety
        console.log(`Blog ID: ${blog.id}`, {
          thumbnail: blog.thumbnail,
          fullPath: blog.thumbnail ? `/storage/${blog.thumbnail}` : 'No thumbnail',
        });

        return (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="px-6 rounded-[22px] bg-transparent custom-card overflow-hidden"
          >
            {/* Thumbnail with error handling */}
            <ThumbnailImage thumbnail={blog.thumbnail} />
            
            <div className="bg-[#193155] p-5 rounded-b-[22px]">
              <h4 className="text-white font-semibold text-2xl">
                {blog.title}
              </h4>

              <p className="text-white font-nunito text-[17px] mt-2">
                {blog.excerpt ?? ""}
              </p>

              <button className="mt-4 border cursor-pointer border-[#2c96e2] font-ebGaramond text-[20px] font-semibold px-4 py-2 rounded-md hover:bg-[#2c96e2] transition">
                Read More
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// Separate ThumbnailImage component for better TypeScript handling
function ThumbnailImage({ thumbnail }: { thumbnail?: string }) {
  const [imageError, setImageError] = useState(false);

  if (!thumbnail || imageError) {
    return (
      <div className="w-full h-[174px] bg-gray-700 rounded-t-[22px] flex items-center justify-center">
        <span className="text-white">No Image</span>
      </div>
    );
  }

  return (
    <img
      src={`/storage/${thumbnail}`}
      alt="thumbnail"
      className="w-full h-[174px] object-cover rounded-t-[22px]"
      onError={() => {
        console.error(`Failed to load: /storage/${thumbnail}`);
        setImageError(true);
      }}
    />
  );
}