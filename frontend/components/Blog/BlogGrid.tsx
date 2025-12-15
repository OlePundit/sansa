import Link from "next/link";
import { Blog, BlogGridProps } from '@/types';

export default function BlogGrid({ blogs }: BlogGridProps ) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 sm:py-50 gap-6">
      {blogs?.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${blog.slug}`}
          className="px-6 rounded-[22px] bg-transparent custom-card overflow-hidden"
        >
          <img
            src={`/storage/${blog.thumbnail}`}
            alt="thumbnail"
            className="w-full h-[174px] object-cover rounded-t-[22px]"
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
      ))}
    </div>
  );
}
