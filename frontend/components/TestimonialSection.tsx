"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Peter Okata",
    image: "/storage/author.webp",
    text: "I cannot recommend Sansa Digital enough! Their team has been instrumental in managing my website and social media.",
  },
  {
    id: 2,
    name: "Augustine Bundi",
    image: "/storage/author1.webp",
    text: "What they were able to accomplish, four other previous developers had failed",
  },
  {
    id: 3,
    name: "Emmanuel Msagha",
    image: "/storage/author2.webp",
    text: "Working with Sansa Digital was the best decision I could ever make in my journey as an entrepreneur",
  },
];

export default function Testimonials() {
  // Container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card variants for animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center w-full pt-40 px-4 py-10">
      <motion.h3 
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h3>

      <motion.div
        className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px] mt-20 md:mt-40"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((t, idx) => {
          const middleIndex = Math.floor(testimonials.length / 2);
          const isMiddle = idx === middleIndex;

          return (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative bg-[#193155] shadow-lg rounded-lg flex flex-col items-center pt-16 pb-10 px-10 mb-10 md:mb-0 w-full sm:w-[45%] lg:w-[30%] transform transition-all duration-300
                ${isMiddle ? 'lg:-translate-y-15' : ''}`} // lift the center one
            >
              {/* Floating Image */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#193155]"
                />
              </div>

              <h4 className="text-white font-serif font-bold text-xl text-center mt-10 mb-4">
                {t.name}
              </h4>
              <div className="w-full flex justify-end text-[#2c96e2] mb-4">
                <Quote size={36} strokeWidth={2} />
              </div>
              <p className="text-white font-sans text-base text-center">{t.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}