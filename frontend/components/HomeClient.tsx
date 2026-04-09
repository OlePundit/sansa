'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, ChevronDown, ArrowDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Service, NavbarSectionProps } from '@/types';

export default function HomeClient({ services }: NavbarSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setServicesOpen(false); setMenuOpen(false); }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* ── Fixed Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1a2d]/85 backdrop-blur-md shadow-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="flex-shrink-0">
            <img src="/storage/whiteai.png" alt="Sansa Digital logo" width="170" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            <li><Link href="/" className="py-1 hover:text-[#2f976b] transition-colors">Home</Link></li>
            <li><Link href="/about" className="py-1 hover:text-[#2f976b] transition-colors">About</Link></li>

            {/* Services dropdown — hover on desktop, click on mobile */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span
                className="flex items-center gap-1 py-1 cursor-pointer hover:text-[#2f976b] transition-colors select-none"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </span>
              {/* Transparent pt-2 bridge fills the gap so mouse stays inside <li> */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[999] min-w-[260px] transition-all duration-200 origin-top ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}>
                <div className="bg-[#0d1a2d]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2.5 text-sm text-gray-200 hover:bg-[#2f976b]/15 hover:text-[#2f976b] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link href="/contact" className="py-1 hover:text-[#2f976b] transition-colors">Contact</Link></li>
            <li><Link href="/blogs" className="py-1 hover:text-[#2f976b] transition-colors">Blog</Link></li>
            <li>
              <Link
                href="https://wa.me/+254112128055"
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-white px-3 py-1.5 rounded-full transition-colors"
              >
                <div className="relative p-0.5 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs">Always online</span>
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-[#0d1a2d]/95 backdrop-blur-md border-t border-white/5"
            >
              <ul className="flex flex-col text-white text-base font-medium px-6 py-4 gap-1">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/blogs', label: 'Blog' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block py-2.5 border-b border-white/5 hover:text-[#2f976b] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                {/* Mobile services accordion */}
                <li>
                  <button
                    onClick={() => setServicesOpen(p => !p)}
                    className="w-full flex items-center justify-between py-2.5 border-b border-white/5 hover:text-[#2f976b] transition-colors"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block py-2 text-sm text-gray-300 hover:text-[#2f976b] transition-colors"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li className="pt-2">
                  <Link
                    href="https://wa.me/+254112128055"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-[#25D366]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="p-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    Always online — WhatsApp
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero Section ── */}
      <div
        className={`relative w-full min-h-screen bg-cover bg-no-repeat bg-center flex flex-col transition-all duration-[2000ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
            linear-gradient(to right, rgba(13,26,45,0.85) 0%, rgba(13,26,45,0.5) 50%, rgba(13,26,45,0.1) 100%),
            url('/storage/header.png')
          `,
        }}
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2f976b]/8 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#2c96e2]/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero content — vertically centered */}
        <div className="container mx-auto px-4 sm:px-6 flex-1 flex items-center pt-20 pb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm mb-6"
              >
                <span className="w-2 h-2 bg-[#2f976b] rounded-full animate-pulse" />
                Kenya's #1 Digital Agency
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                <span className="block">Sansa</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2f976b] via-[#3ab87e] to-[#2c96e2]">
                  Digital
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white font-semibold mb-8 max-w-md leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                As a leading tech and creative agency, we help brands bring their ideas to life with cutting-edge solutions.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="#section-info">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="cursor-pointer bg-[#2f976b] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#2f976b]/30 hover:bg-[#27825c] transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="cursor-pointer bg-white/8 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-white/15 transition-colors duration-300"
                  >
                    Get a Quote
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold text-[#2f976b]">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — decorative (desktop only) */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative w-72 h-72">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#2f976b]/10 blur-3xl scale-150" />
                {/* Spinning rings */}
                <div className="absolute inset-0 rounded-full border border-white/8" />
                <div className="absolute inset-4 rounded-full border border-[#2f976b]/25 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border border-[#2c96e2]/20 animate-spin-reverse" />
                <div className="absolute inset-12 rounded-full border border-white/8" />
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/storage/whiteai.png"
                    alt="Sansa Digital"
                    className="w-32 drop-shadow-2xl animate-float"
                  />
                </div>
                {/* Floating pill badges */}
                <motion.div
                  className="absolute -top-4 right-4 bg-[#193155]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-white text-xs font-medium shadow-lg"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Web Dev
                </motion.div>
                <motion.div
                  className="absolute bottom-4 -left-6 bg-[#193155]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-white text-xs font-medium shadow-lg"
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  SEO & Marketing
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 right-8 bg-[#2f976b]/80 backdrop-blur-sm border border-[#2f976b]/30 rounded-full px-3 py-1.5 text-white text-xs font-medium shadow-lg"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  Mobile Apps
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <Link href="#section-info" className="flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors group">
            <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
