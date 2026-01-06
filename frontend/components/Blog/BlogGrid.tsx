'use client'

import Link from "next/link";
import { Blog, BlogGridProps } from '@/types';
import { useState } from 'react';
import { urls } from '@/utils/urls'; // Import the helper utility

export default function BlogGrid({ blogs }: BlogGridProps ) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 sm:py-50 gap-6">
      {blogs?.map((blog: Blog) => {
        // Use the utility function to get the correct image URL
        const thumbnailUrl = blog.thumbnail 
          ? urls.api.storage(blog.thumbnail)
          : null;

        // Debug log with transformed URL
        console.log(`Blog ID: ${blog.id}`, {
          thumbnail: blog.thumbnail,
          fullPath: thumbnailUrl,
          originalPath: blog.thumbnail,
        });

        return (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="px-6 rounded-[22px] bg-transparent custom-card overflow-hidden"
          >
            {/* Thumbnail with error handling */}
            <ThumbnailImage 
              thumbnail={blog.thumbnail}
              thumbnailUrl={thumbnailUrl}
            />
            
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

// Updated ThumbnailImage component with proper URL handling
function ThumbnailImage({ 
  thumbnail, 
  thumbnailUrl 
}: { 
  thumbnail?: string;
  thumbnailUrl?: string | null;
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!thumbnail || !thumbnailUrl || imageError) {
    return (
      <div className="w-full h-[174px] bg-gray-700 rounded-t-[22px] flex items-center justify-center">
        <span className="text-white">No Image</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[174px] rounded-t-[22px] overflow-hidden">
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={thumbnailUrl}
        alt="Blog thumbnail"
        className={`w-full h-[174px] object-cover rounded-t-[22px] transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.error(`Failed to load image: ${thumbnailUrl}`);
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}