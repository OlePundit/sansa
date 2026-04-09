'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavbarSectionProps } from '@/types';
import SharedNavbar from '@/components/SharedNavbar';

export default function NavbarSection({ services }: NavbarSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SharedNavbar services={services} />

      {/* Hero */}
      <div
        className={`relative w-full min-h-screen bg-cover bg-no-repeat bg-center flex items-center transition-all duration-[2000ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
            linear-gradient(to right, rgba(13,26,45,0.80) 0%, rgba(13,26,45,0.4) 60%, rgba(13,26,45,0.05) 100%),
            url('/storage/about.png')
          `,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm text-white mb-6"
            >
              <span className="w-2 h-2 bg-[#2f976b] rounded-full animate-pulse" />
              About Sansa Digital
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Let's Supercharge <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f976b] to-[#2c96e2]">Your Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-white font-semibold mb-8 max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              Sansa Digital is a digital and creative agency based in Nairobi, Kenya. Our services
              range from web design and development to social media and digital marketing.
            </p>

            <Link href="#section-info">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer bg-[#2f976b] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#2f976b]/30 hover:bg-[#27825c] transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
