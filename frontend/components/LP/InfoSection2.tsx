'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InfoSection2Props {
  img3: string;
  title2: string;
  benefits2: string;
}

export default function InfoSection2({ img3, title2, benefits2 }: InfoSection2Props) {
  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <Image
              src={img3}
              alt={title2}
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            {/* Decorative border frame */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-[#2c96e2]/30 rounded-2xl -z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#2c96e2]/10 border border-[#2c96e2]/25 text-[#2c96e2] rounded-full px-4 py-1 text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 bg-[#2c96e2] rounded-full" />
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{title2}</h2>

          <div
            className="lp-benefits text-gray-300 text-sm sm:text-base leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: benefits2 }}
          />

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 cursor-pointer bg-[#2c96e2] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2f976b] transition-colors duration-300 shadow-lg shadow-[#2c96e2]/20 text-sm"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
