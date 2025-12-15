"use client";

import React from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface PackageItem {
  id: number;
  tier: string;
  price: number;
  features: string[];
}

interface PackagesSectionProps {
  webs: PackageItem[];
  digitals: PackageItem[];
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ webs, digitals }) => {
  // Animation variants for cards only
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

  return (
    <section id="section-packages" className="py-6 md:py-16 flex flex-col items-center text-white">
      <h3 className="text-3xl md:text-4xl font-semibold">Packages</h3>

      {/* Web Design Packages */}
      <div className="w-full flex flex-col items-center">
        <h4 className="text-2xl font-montserrat text-[#2c96e2] mt-5 mb-8 text-center">Web Design Packages</h4>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {webs.map((web, index) => (
            <motion.div
              key={web.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-[#193155] p-6 rounded-2xl flex flex-col justify-between w-72 cursor-pointer"
            >
              <h5 className="text-xl text-[#2f976b] font-semibold mb-3">{web.tier} Package</h5>
              <ul className="mb-4 list-none mt-3 mb-3 space-y-2">
                {web.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex relative text-white"
                  >
                    <CheckCircle className="text-[#2f976b] w-5 h-5 flex-shrink-0 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
                <a
                  href={`/order/${web.id}`}
                  className="group flex items-center justify-between bg-[#2c96e2] text-white font-serif text-lg px-4 py-2 rounded-md hover:bg-[#2f976b] hover:text-[#193155] transition-colors duration-300"
                >
                  Ksh {web.price}
                  <ArrowUpRight
                    className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Digital Marketing Packages */}
      <div className="w-full flex flex-col items-center mt-16">
        <h4 className="text-3xl font-medium text-[#2c96e2] mb-8 text-center">Digital Marketing Packages</h4>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {digitals.map((digital, index) => (
            <motion.div
              key={digital.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-[#193155] p-6 rounded-2xl flex flex-col justify-between w-72 cursor-pointer"
            >
              <h5 className="text-xl text-[#2f976b] font-semibold mb-3">{digital.tier} Package</h5>
              <ul className="mb-4 list-none space-y-2">
                {digital.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex relative text-white before:absolute before:left-0 before:top-1/2 before:w-4 before:h-4 before:-translate-y-1/2 before:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22%232c96e2%22 viewBox=%220 0 16 16%22><path d=%22M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16%22/><path d=%22m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05%22/></svg>')] before:bg-contain before:bg-no-repeat"
                  >
                    <CheckCircle className="text-[#2f976b] w-5 h-5 flex-shrink-0 mr-3" />
                    <span>{feature}</span>                  
                  </li>
                ))}
              </ul>
              <a
                href={`/order/${digital.id}`}
                className="group flex items-center cursor-pointer justify-between bg-[#2c96e2] text-white font-serif text-lg px-4 py-2 rounded-md hover:bg-[#2f976b] hover:text-[#193155] transition-colors duration-300"
              >
                Ksh {digital.price}
                <ArrowUpRight
                  className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};