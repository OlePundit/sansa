import Image from "next/image";
import getLp from "@/server/lpDetail";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  console.log('🔍 Slug:', slug);
  const lp = await getLp(slug);

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
        
    </div>