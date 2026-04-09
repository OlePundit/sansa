"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-10 sm:py-16 px-4">
      <motion.div
        className="relative flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c96e2] via-[#2175c4] to-[#1558a0]" />
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('/storage/texture.jpg')] bg-cover opacity-20 pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-20 w-60 h-60 bg-[#2f976b]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Text + button */}
        <div className="relative z-10 flex flex-col items-start p-8 sm:p-12 max-w-lg">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs text-white mb-5">
            <span className="w-1.5 h-1.5 bg-[#2f976b] rounded-full animate-pulse" />
            Let's work together
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Ready to bring your <span className="text-[#c8f0d6]">idea to life?</span>
          </h3>
          <p className="text-white/75 text-base mb-8 leading-relaxed">
            Don't be afraid to get in touch. Let us help shape your dreams into a digital reality.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex items-center gap-2 bg-white text-[#1558a0] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-[#2f976b] hover:text-white transition-colors duration-300"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        {/* Decorative image — hidden on small screens */}
        <div className="relative z-10 hidden sm:flex items-end justify-end self-end flex-shrink-0 pr-4">
          <Image
            src="/storage/hand.webp"
            alt="Get a quote"
            width={300}
            height={280}
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
