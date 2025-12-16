"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Import Variants

interface PortfolioItem {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Web Design",
    subtitle: "Allure Essence Spa",
    link: "https://allureessencespa.com",
    image: "/storage/beauty.webp",
  },
  {
    title: "Web Design",
    subtitle: "Chenaniah Solutions",
    link: "https://chenaniahsolutions.com/vector/public/",
    image: "/storage/chenaniah.webp",
  },
  {
    title: "Web Design",
    subtitle: "Tradecraft Printers",
    link: "https://tradecraft.co.ke",
    image: "/storage/tradecraft.webp",
  },
  {
    title: "Web Design",
    subtitle: "Institute of Public Finance",
    link: "https://ipfglobal.or.ke",
    image: "/storage/ipf-port.webp",
  },
];

export const PortfolioSection: React.FC = () => {
  // Container variants for staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card variants for animation
  const cardVariants: Variants = {
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
        ease: [0.25, 0.1, 0.25, 1] as const, // Add "as const" here
      },
    },
  };

  return (
    <section
      id="section-portfolio"
      className="py-10 md:py-16 flex flex-col items-center text-white"
    >
      {/* Section title */}
      <h3 className="text-3xl md:text-4xl font-bold">
        Portfolio
      </h3>

      {/* Portfolio items container with stagger animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="relative w-[350px] hover:w-[450px] cursor-pointer transition-all duration-300 cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />

            {/* Image */}
            <img
              src={item.image}
              alt={`${item.title}-${index}`}
              className="w-full h-auto object-cover relative z-10"
            />

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent z-10" />

            {/* Colored bottom bar */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-[#2c96e2]/70 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20" />

            {/* Text content */}
            <div className="absolute bottom-4 left-4 text-white z-30">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <h5 className="text-sm">{item.subtitle}</h5>
            </div>

          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};