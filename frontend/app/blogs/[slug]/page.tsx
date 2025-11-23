import Image from "next/image";
import BlogThumbnail from "@/components/Blog/BlogThumbnail";
import { getServices } from "@/server/services";
import { getBlog } from "@/server/blogDetail";


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
          <div className="flex justify-start items-start mx-auto">
            <div className="lg:w-9/12 w-full flex flex-col text-white font-montserrat text-[20px] mt-[100px] ml-[50px]">

              <h1 className="text-4xl font-ebGaramond font-bold mb-6">
                {blog.title}
              </h1>

              {blog.thumbnail && (
                <Image
                  src={blog.thumbnail}
                  width={1000}
                  height={500}
                  alt={blog.title}
                  className="rounded-lg object-cover mb-8"
                />
              )}

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

        
        {/* Additional about page content can go here */}
    </div>

  );
}