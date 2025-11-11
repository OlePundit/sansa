"use client";

import React from "react";

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
  return (
    <section
      id="section-portfolio"
      className="py-20 flex flex-col items-center text-white"
    >
      {/* Section title */}
      <h3 className="text-3xl md:text-4xl font-semibold">
        Portfolio
      </h3>

      {/* Portfolio items */}
      <div className="flex flex-wrap justify-center gap-8 py-16">
        {portfolioItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[350px] hover:w-[450px] transition-all duration-300 cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={`${item.title}-${index}`}
              className="w-full h-auto object-cover"
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

          </a>
        ))}
      </div>
    </section>
  );
};
