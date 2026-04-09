"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function SectionInfo() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: ["Story"],
      typeSpeed: 80,
      loop: false,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="section-info"
      className="flex flex-col lg:flex-row justify-center items-center w-full gap-12 lg:gap-16 py-16 sm:py-24 px-4 sm:px-6"
    >
      {/* Image — left on desktop */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative">
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#2f976b]/20 to-[#2c96e2]/10 rounded-3xl blur-2xl" />
          {/* Accent border */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#2f976b]/30 rounded-2xl" />
          <Image
            src="/storage/person.jpg"
            alt="About Sansa Digital"
            width={500}
            height={500}
            className="relative rounded-2xl object-cover shadow-2xl w-full max-w-md max-h-[480px] sm:max-h-none"
          />
        </div>
      </motion.div>

      {/* Text — right on desktop */}
      <motion.div
        className="w-full lg:w-1/2 order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="inline-flex items-center gap-2 bg-[#2f976b]/10 border border-[#2f976b]/25 text-[#2f976b] rounded-full px-4 py-1 text-xs font-medium mb-5">
          <span className="w-1.5 h-1.5 bg-[#2f976b] rounded-full" />
          Who We Are
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Our <span ref={el} className="text-[#2f976b]" />
        </h2>

        <div className="space-y-5 mb-8">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We discovered that there was a gap in the market — with regard to lack of essential skills in the digital and ICT services space. Businesses are the backbone of the economy, yet they often struggle to access affordable, high-quality digital solutions that can help them grow.
            corporations.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Our aim is to provide top-notch digital services that empower businesses to thrive in the digital age. We are passionate about helping our clients succeed and are committed to delivering exceptional results that exceed their expectations.
          </p>
        </div>

        <Link href="/blogs">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-[#2c96e2] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#2c96e2]/20 hover:bg-[#2f976b] transition-colors duration-300"
          >
            Read Our Blog
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
