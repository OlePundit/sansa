'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LPNavbarSectionProps } from '@/types';
import SharedNavbar from '@/components/SharedNavbar';

export default function NavbarSection({ services, img1, title, intro }: LPNavbarSectionProps) {
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
        className={`relative w-full min-h-[65vh] bg-cover bg-no-repeat bg-center flex items-center transition-all duration-[2000ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(13,26,45,0.88) 0%, rgba(13,26,45,0.5) 55%, rgba(13,26,45,0.1) 100%),
            url('/storage/lp.png')
          `,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left — copy */}
            <motion.div
              className="max-w-lg z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                {title}
              </h1>
              <div
                className="text-white text-base sm:text-lg font-semibold mb-8 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
              <Link href="#section-info">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer bg-[#2c96e2] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#2c96e2]/25 hover:bg-[#2f976b] transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Right — image */}
            <motion.div
              className="relative w-full md:w-[420px] h-[240px] md:h-[320px] flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            >
              <Image
                src={img1}
                alt={title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
