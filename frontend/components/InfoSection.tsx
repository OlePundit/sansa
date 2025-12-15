"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function InfoSection() {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Solutions"],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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

  // Card variants
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
    <section
      id="section-info"
      className="flex flex-col-reverse lg:flex-row justify-between items-center md:py-16 py-10 px-4 lg:px-12 mt-10"
    >
      {/* Left column with cards */}
      <motion.div
        className="w-full lg:w-6/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 — Raised effect */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="bg-[#193155] rounded-2xl shadow-2xl shadow-[#00000040] overflow-hidden transform md:translate-y-[-40px] transition-all duration-300"
        >
          <Image
            src="/storage/tech.webp"
            alt="cutting-edge"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5 lg:p-4">
            <h5 className="text-lg font-semibold">Cutting edge technology</h5>
            <p className="text-gray-400 text-md mt-1">
              We employ emerging technologies
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            rotate: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
        >
          <Image
            src="/storage/data.webp"
            alt="data"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5 lg:p-4">
            <h5 className="text-lg font-semibold">Data driven marketing</h5>
            <p className="text-gray-400 text-md mt-1">
              Our marketing is informed by the data
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            rotate: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
        >
          <Image
            src="/storage/bold.webp"
            alt="bold"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5 lg:p-4">
            <h5 className="text-lg font-semibold">We are Bold</h5>
            <p className="text-gray-400 text-md mt-1">
              We are not afraid to try new techniques
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            rotate: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
        >
          <Image
            src="/storage/limit.webp"
            alt="limits"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5 lg:p-4">
            <h5 className="text-lg font-semibold">We Push the limits</h5>
            <p className="text-gray-400 text-md mt-1">
              We defy the rules and push the limits
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right column with info */}
      <div className="w-full lg:w-6/12 md:w-3/4 flex flex-col justify-center items-start text-left mb-12 mb-30 lg:mb-0 lg:ml-10">
        <h2 className="text-4xl lg:text-4xl font-bold leading-snug mb-4">
          We Provide <span ref={el} className="text-[#2f976b]"></span> To Your Problems
        </h2>
        <p className="mb-6 text-xl">
          We are a team of experts from different technical and creative
          backgrounds, with one goal in mind — to change the competitive
          landscape in the space.
        </p>
        <motion.a
          href="/#section-services"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block bg-[#2c96e2] cursor-pointer text-white text-xl font-bold px-6 py-2 rounded-md shadow hover:bg-[#2f976b] transition-colors duration-300 transform hover:scale-105"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}