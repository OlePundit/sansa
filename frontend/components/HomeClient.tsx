'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeClient({ services, packages }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
            radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
            url('/storage/header.png')
          `,
        }}
      >
        {/* Navbar */}
        <nav className="bg-transparent shadow-sm">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Menu */}
            <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col md:flex-row md:space-x-6 text-white text-lg font-light">
                <li>
                  <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
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
                  <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
                </li>
                <li>
                  <Link href="/blogs" className="block py-2 hover:text-gray-300">Blog</Link>
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

        {/* Header Banner */}
        <div className="container mx-auto text-white px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Sansa Digital</h1>
              <p className="text-lg mb-6">
                As a leading tech and creative agency, our aim is to help brands bring their ideas to life.
              </p>
              <Link href="#section-info">
                <button className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
