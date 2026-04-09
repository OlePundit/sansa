'use client';

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

      <div
        className={`relative w-full min-h-[60vh] bg-cover bg-no-repeat bg-center flex items-center justify-center transition-all duration-[2000ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
            linear-gradient(to bottom, rgba(13,26,45,0.75) 0%, rgba(13,26,45,0.35) 100%),
            url('/storage/header.png')
          `,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <p className="text-[#2f976b] text-xs font-semibold tracking-widest uppercase mb-4">
              Home &nbsp;/&nbsp; Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Our Services
            </h1>
            <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-md mx-auto">
              Full-stack digital solutions tailored to help your business grow.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
