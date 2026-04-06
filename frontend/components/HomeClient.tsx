'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { Service, NavbarSectionProps } from '@/types';

export default function HomeClient({ services }: NavbarSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside the menu container
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't close if clicking the hamburger button or inside the mobile menu
      if (target.closest('.mobile-menu-container') || target.closest('.hamburger-button')) return;
      setMenuOpen(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  // Handle escape key for both dropdown and mobile menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleServices = () => setServicesOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* Hero Section */}
      <div
        className={`relative w-full h-screen bg-cover bg-no-repeat bg-center transition-all duration-[2000ms] ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
            url('/storage/header.png')
          `,
        }}
      >
        {/* Navbar - always on top */}
        <nav className="bg-transparent shadow-sm pt-6 relative z-20">
          <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center">
              <img src="/storage/whiteai.png" alt="logo" width="200" className="mx-2" />
            </Link>

            {/* Hamburger button - with class for outside click detection */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white md:hidden focus:outline-none z-30 relative hamburger-button"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>

            {/* Desktop menu (hidden on mobile) */}
            <div className="hidden md:block">
              <ul className="flex md:flex-row md:space-x-8 text-white text-lg font-light">
                <li><Link href="/" className="block py-2 hover:text-gray-300">Home</Link></li>
                <li><Link href="/about" className="block py-2 hover:text-gray-300">About</Link></li>

                {/* Services Dropdown - Desktop */}
                <li className="relative" ref={dropdownRef}>
                  <span
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="flex items-center gap-1 py-2 cursor-pointer hover:text-gray-300 select-none"
                  >
                    Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`
                      absolute left-0 z-50 mt-2 bg-gray-800 rounded-lg shadow-lg
                      transition-all duration-200 origin-top
                      ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                      w-auto min-w-[320px]
                    `}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-white hover:bg-gray-700 whitespace-nowrap"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </li>

                <li><Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link></li>
                <li><Link href="/blogs" className="block py-2 hover:text-gray-300">Blog</Link></li>
                <li>
                  <Link href="https://wa.me/+254112128055" target="_blank" className="block py-2 hover:text-gray-300 flex items-center">
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

        {/* Mobile Menu Overlay - fixed, dark background (70% opaque), high z-index */}
        <div
          className={`
            fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300
            md:hidden mobile-menu-container
            ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          `}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6 text-white text-xl font-medium">
              <li><Link href="/" onClick={closeMenu} className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" onClick={closeMenu} className="hover:text-gray-300">About</Link></li>
              
              {/* Mobile Services Dropdown - fully clickable */}
              <li className="relative w-full text-center">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-center gap-1 w-full hover:text-gray-300"
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-3 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => { setServicesOpen(false); closeMenu(); }}
                        className="block px-6 py-3 text-white hover:bg-gray-700 border-b border-gray-700 last:border-0"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              
              <li><Link href="/contact" onClick={closeMenu} className="hover:text-gray-300">Contact</Link></li>
              <li><Link href="/blogs" onClick={closeMenu} className="hover:text-gray-300">Blog</Link></li>
              <li>
                <Link href="https://wa.me/+254112128055" target="_blank" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300">
                  <div className="relative p-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <Phone className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  Always online
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Header Banner Content */}
        <div className="container mx-auto text-white px-4 py-10 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">Sansa Digital</h1>
              <p className="text-xl font-medium sm:text-2xl sm:font-semibold mb-6">
                As a leading tech and creative agency, our aim is to help brands bring their ideas to life.
              </p>
              <Link href="#section-info">
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
                  className="cursor-pointer bg-[#2f976b] text-xl font-bold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-[#193155] transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}