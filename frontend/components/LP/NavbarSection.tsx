"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from "lucide-react"; // Standard WhatsApp-style icon

export default function NavbarSection({ services, thumbnail, title, intro }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div
      className="w-full relative bg-cover bg-no-repeat h-[60vh]"
      style={{ backgroundImage: "url('/storage/lp.png')" }}
    >
      {/* Navbar */}
        <nav className="bg-transparent shadow-sm pt-6"> {/* added top padding */}
          <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center">
              <img src="/storage/whiteai.png" alt="logo" width="200" className="mx-2" />
            </Link>

            {/* Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Menu */}
            <div
              className={`w-full md:flex md:items-center md:w-auto ${
                menuOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg font-light pt-4 md:pt-0">
                {/* ↑ added pt-4 for small screens, keeps spacing nice */}
                <li>
                  <Link href="/" className="block py-2 hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 hover:text-gray-300">
                    About
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li className="relative group">
                  <span className="block py-2 cursor-pointer hover:text-gray-300">
                    Services
                  </span>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg mt-2 min-w-[200px] shadow-lg">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </li>

                {/* Solutions Dropdown */}
                <li className="relative group">
                  <span className="block py-2 cursor-pointer hover:text-gray-300">
                    Solutions
                  </span>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg mt-2 min-w-[200px] shadow-lg">
                    <Link
                      href="https://self.sansadigital.com"
                      target="_blank"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Sansa Digital 2.0
                    </Link>
                  </div>
                </li>

                <li>
                  <Link href="/contact" className="block py-2 hover:text-gray-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="block py-2 hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/+254112128055"
                    target="_blank"
                    className="block py-2 hover:text-gray-300 flex items-center"
                  >
                    <div className="relative mx-2 p-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <Phone className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>Always online
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      {/* Banner */}
      <div className="relative mt-10">
        <div className="flex flex-col md:flex-row items-center md:px-20 justify-between">

          <div className="max-w-lg z-20">
            <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-white mb-6">
              {intro}
            </p>
            <Link href="#section-info">
              <button className="bg-[#2c96e2] cursor-pointer text-xl font-bold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-[#193155] transition">
                Learn More
              </button>
            </Link>
          </div>

          {/* thumbnail image */}
          <div className="relative w-full h-[250px] flex items-center justify-center">
            <Image
              src={thumbnail}
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
  );
}
