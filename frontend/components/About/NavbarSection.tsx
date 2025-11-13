"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavbarSection({ services }) {
  return (
    <div
      className="relative bg-cover bg-no-repeat h-[100vh]"
      style={{ backgroundImage: "url('/storage/about.png')" }}
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
      <div className="relative mt-10">
        <div className="flex flex-col md:flex-row items-center md:px-20 lg:px-50 justify-between">
          <div className="max-w-lg z-20">
            <h1 className="text-white text-5xl text-[#193155] font-bold mb-4">Let’s Supercharge Your Growth</h1>
            <p className="text-white mb-6">
              Sansa Digital is a digital and creative agency based in Nairobi, Kenya. Our services
              range from web design and development to social media and digital marketing.
            </p>
            <Link href="#section-info">
                <button className="bg-[#193155] text-xl font-bold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-[#193155] transition">

                Learn More
                </button>
            </Link>
          </div>

        {/* About Image - Basic test */}
            <div className="relative w-full h-[250px]"> {/* Smaller for testing */}
            {/* Fallback text */}
                <div className="absolute inset-0 flex items-center justify-center text-red-500">
                    <Image
                        src="/storage/aboutImage.png"
                        alt="About"
                        width={700}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
