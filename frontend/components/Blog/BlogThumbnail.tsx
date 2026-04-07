'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { MessageCircle, Phone } from "lucide-react";
import { urls } from '@/utils/urls';

interface Service {
  slug: string;
  title: string;
}

export default function BlogThumbnail({
  thumbnail,
  title,
  services,
}: {
  thumbnail: string;
  title: string;
  services: Service[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleServices = () => setServicesOpen(prev => !prev);

  // If thumbnail is already a full URL, use it directly
  const thumbnailUrl = thumbnail
    ? thumbnail.startsWith('http')
      ? thumbnail
      : urls.api.storage(thumbnail)
    : null;

  return (
    <div
      className="relative w-full bg-cover bg-no-repeat h-[60vh]"
      style={{ backgroundImage: thumbnailUrl ? `url('${thumbnailUrl}')` : undefined }}
    >
      {/* Navbar */}
      <nav className="bg-transparent shadow-sm pt-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/storage/whiteai.png"
              alt="logo"
              width={200}
              height={60}
              className="mx-2"
            />
          </Link>

          {/* Hamburger — mobile */}
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
            <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg font-light pt-4 md:pt-0 md:bg-transparent bg-black/70 backdrop-blur-sm rounded-xl px-4 pb-4 md:px-0 md:pb-0">
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
              <li className="relative" ref={dropdownRef}>
                <span
                  onClick={toggleServices}
                  onMouseEnter={() => window.innerWidth >= 768 && setServicesOpen(true)}
                  className="flex items-center gap-1 py-2 cursor-pointer hover:text-gray-300 select-none"
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </span>

                <div
                  onMouseLeave={() => window.innerWidth >= 768 && setServicesOpen(false)}
                  className={`
                    absolute left-0 z-50 mt-2 bg-gray-800 rounded-lg shadow-lg
                    transition-all duration-200 origin-top
                    ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                    w-[calc(100vw-2rem)] md:w-auto md:min-w-[320px]
                    max-w-[calc(100vw-2rem)] md:max-w-none
                  `}
                  style={{
                    left: '50%',
                    transform: `translateX(-50%) ${servicesOpen ? 'scale(1)' : 'scale(0.95)'}`,
                  }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-white hover:bg-gray-700 whitespace-normal break-words"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
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
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-gray-300 flex items-center"
                >
                  <div className="relative mx-2 p-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <Phone className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  Always online
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative mt-40">
        <div className="flex flex-col md:flex-row items-center md:px-20 lg:px-50 justify-center">
          <div className="max-w-lg z-20 items-center">
            <h1 className="text-5xl text-white text-center font-bold mb-10">{title}</h1>
            <p className="text-[#2f976b] text-2xl font-semibold text-center mb-6">
              home // blogs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
