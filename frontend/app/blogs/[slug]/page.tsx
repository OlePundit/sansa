import Image from "next/image";

async function getBlog(slug: string) {
  const baseUrl = process.env.APP_URL ?? "http://127.0.0.1:8000";
  const url = `${baseUrl}/api/blogs/${slug}`;

  console.log('🔄 Fetching from URL:', url);

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ HTTP Error:', response.status, errorText);
      throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('📦 Full API result:', result);
    console.log('📦 Data property:', result.data);
    
    return result.data;
    
  } catch (error) {
    console.error('💥 [getBlog] Fetch error:', error);  
    return null;
  }
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  console.log('🔍 Slug:', slug);
  
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-red-500 text-xl">Blog not found</p>
        <p className="text-gray-500">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
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
                font-ebGaramond
                text-[32px]
                font-bold
                w-[423px]
                h-[71px]
                rounded-[8px]
                mt-[100px]
                mb-[100px]
                hover:bg-[#193155]
                transition
              "
            >
              Request Quotation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}