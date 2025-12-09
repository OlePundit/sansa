"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function NavbarSection({ services }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="relative bg-cover bg-no-repeat h-[60vh]"
      style={{ backgroundImage: "url('/storage/blog.png')" }}
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
                    <i className="fab fa-whatsapp mr-2"></i>Always online
                  </Link>
                </li>
              </ul>
            </div>
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
