'use client'
import Image from "next/image";
import Link from "next/link";

export default function BlogThumbnail({
  thumbnail,
  title,
  services,
}: {
  thumbnail: string;
  title: string;
  services: any[];   // or your service type
}){
  return (
    <div
    className="relative bg-cover bg-no-repeat h-[60vh]"
    style={{ backgroundImage: `url('${thumbnail}')` }}
    >

      {/* Navbar */}
      <nav className="navbar flex justify-between items-center px-6 py-4 bg-transparent shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">

            <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
                <Image src="/storage/whiteai.png" alt="logo" width={200} height={60} className="mx-3" />
            </Link>
            </div>

            <ul className="hidden md:flex gap-6 text-white items-center">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>

            <li className="group relative">
                <button className="hover:text-blue-400">Services</button>
                <div className="absolute hidden group-hover:block bg-[#0a1830]/95 mt-2 rounded-lg shadow-lg">
                {services.map((service) => (
                    <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-white hover:bg-blue-600"
                    >
                    {service.title}
                    </Link>
                ))}
                </div>
            </li>

            <li><Link href="/#section-projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-400">Blog</Link></li>
            <li>
                <a
                href="https://wa.me/+254112128055"
                target="_blank"
                className="flex items-center hover:text-green-400"
                >
                <i className="fab fa-whatsapp mr-2"></i> Always online
                </a>
            </li>
            </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative mt-40">
        <div className="flex flex-col md:flex-row items-center md:px-20 lg:px-50 justify-center">
          <div className="max-w-lg z-20 items-center">
            <h1 className="text-5xl text-[#193155] text-center font-bold mb-10">Blogs</h1>
            <p className="text-[#2f976b] text-2xl font-semibold text-center mb-6">
             home // blogs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
