import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types';

interface RelatedBlogsProps {
  blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (blogs.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.slice(0, 3).map((blog) => (
        <Link 
          key={blog.id} 
          href={`/blog/${blog.slug}`}
          className="group block bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {blog.thumbnail && (
            <div className="relative h-48 w-full">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 group-hover:text-[#2c96e2] transition">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {blog.excerpt || blog.body.substring(0, 100) + '...'}
            </p>
            <div className="mt-4 text-[#2c96e2] text-sm font-semibold">
              Read more →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}