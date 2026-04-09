'use client';

import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import { motion, Variants } from "framer-motion";

const logos = [
  '/storage/gov-logo.webp',
  '/storage/dcoce.webp',
  '/storage/cpa_logo.webp',
  '/storage/landscape.svg',
  '/storage/kimuzi-logo.webp',
  '/storage/chenaniah-logo.webp',
  '/storage/ictalogo.webp',
  '/storage/pink-final.webp',
  '/storage/renters.webp',
  '/storage/kfc.webp',
  '/storage/stima.webp',
  '/storage/logo.webp',
  '/storage/callapr.png',
  '/storage/tvet.webp',
  '/storage/africads.png',
  '/storage/bell-consultants.webp',
  '/storage/allure.png',
  '/storage/IPF.webp',
  '/storage/maji.webp',
  '/storage/safari.png',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function ProjectsSection() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: ["Clients"],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6" id="section-projects">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.p
          className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by
        </motion.p>
        <motion.h3
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span ref={el} className="text-[#2f976b]" />
        </motion.h3>
      </div>

      {/* Logo wall */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            className="flex items-center justify-center w-24 h-16 sm:w-28 sm:h-20 rounded-xl bg-white/4 border border-white/6 hover:border-white/15 hover:bg-white/8 transition-all duration-200 p-3"
          >
            <img
              src={logo}
              alt={`client-${index}`}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.style.display = 'none';
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
