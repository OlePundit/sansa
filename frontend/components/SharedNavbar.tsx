'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Service } from '@/types';

interface SharedNavbarProps {
  services: Service[];
}

export default function SharedNavbar({ services }: SharedNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setServicesOpen(false); setSolutionsOpen(false); setMenuOpen(false); }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <li><Link href="/" className="py-1 hover:text-[#2f976b] transition-colors">Home</Link></li>
          <li><Link href="/about" className="py-1 hover:text-[#2f976b] transition-colors">About</Link></li>

          {/* Services dropdown — hover only */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="flex items-center gap-1 py-1 cursor-pointer hover:text-[#2f976b] transition-colors select-none">
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

          {/* Solutions dropdown — hover only */}
          <li
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <span className="flex items-center gap-1 py-1 cursor-pointer hover:text-[#2f976b] transition-colors select-none">
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </span>
            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[999] min-w-[300px] transition-all duration-200 origin-top ${solutionsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}>
              <div className="bg-[#0d1a2d]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2">
                <a
                  href="https://www.sansadigital.com/services/artificial-intelligence-ai-and-machine-learning-solutions"
                  className="block px-5 py-2.5 text-sm text-gray-200 hover:bg-[#2f976b]/15 hover:text-[#2f976b] transition-colors"
                  onClick={() => setSolutionsOpen(false)}
                >
                  AI & Machine Learning Solutions
                </a>
                <a
                  href="https://www.sansadigital.com/services/management-information-systems"
                  className="block px-5 py-2.5 text-sm text-gray-200 hover:bg-[#2f976b]/15 hover:text-[#2f976b] transition-colors"
                  onClick={() => setSolutionsOpen(false)}
                >
                  Management Information Systems
                </a>
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
              <div className="p-0.5 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
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

      {/* Mobile drawer */}
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

              {/* Services accordion */}
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

              {/* Solutions accordion */}
              <li>
                <button
                  onClick={() => setSolutionsOpen(p => !p)}
                  className="w-full flex items-center justify-between py-2.5 border-b border-white/5 hover:text-[#2f976b] transition-colors"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      <a
                        href="https://www.sansadigital.com/services/artificial-intelligence-ai-and-machine-learning-solutions"
                        className="block py-2 text-sm text-gray-300 hover:text-[#2f976b] transition-colors"
                        onClick={() => { setMenuOpen(false); setSolutionsOpen(false); }}
                      >
                        AI & Machine Learning Solutions
                      </a>
                      <a
                        href="https://www.sansadigital.com/services/management-information-systems"
                        className="block py-2 text-sm text-gray-300 hover:text-[#2f976b] transition-colors"
                        onClick={() => { setMenuOpen(false); setSolutionsOpen(false); }}
                      >
                        Management Information Systems
                      </a>
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
  );
}
