'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InfoSectionProps {
  img2: string;
  title1: string;
  benefits: string;
}

export default function InfoSection({ img2, title1, benefits }: InfoSectionProps) {
  return (
    <section id="section-info" className="w-full px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <Image
              src={img2}
              alt={title1}
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            {/* Decorative border frame */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#2f976b]/30 rounded-2xl -z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#2f976b]/10 border border-[#2f976b]/25 text-[#2f976b] rounded-full px-4 py-1 text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 bg-[#2f976b] rounded-full" />
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{title1}</h2>

          <div
            className="lp-benefits text-gray-300 text-sm sm:text-base leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: benefits }}
          />

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 cursor-pointer bg-[#2f976b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#27825c] transition-colors duration-300 shadow-lg shadow-[#2f976b]/20 text-sm"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
