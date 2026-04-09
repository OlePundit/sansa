"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricesSection() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: ["Ideas", "Vision", "Dreams", "Future"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="section-prices"
      className="w-full py-20 mt-16 sm:mt-24 md:mt-40"
    >
      <div>
        <div
          className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
              radial-gradient(104.85% 104.85% at 50% 100%, rgba(23,23,23,0) 61%, #171717 90.5%),
              url('/storage/mid.webp')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay tint */}
          <div className="absolute inset-0 bg-[#171717]/30" />

          {/* Floating decorative ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3 pointer-events-none" />

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-start sm:items-center text-left sm:text-center px-8 sm:px-12 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let us help you bring your{" "}
              <span ref={el} className="text-[#2f976b]" />
              <br className="hidden sm:block" />
              {" "}to life
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl">
              From concept to launch, we turn your vision into digital reality. Let's build something remarkable together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer bg-[#2f976b] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#2f976b]/25 hover:bg-[#27825c] transition-colors duration-300"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors duration-300"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
