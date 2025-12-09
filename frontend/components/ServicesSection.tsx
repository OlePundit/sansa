"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Services"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  const services = [
    {
      img: "/storage/web.webp",
      title: "Web design and development",
      desc: "We shall create a responsive and modern website for your business to help you interact with prospective online customers.",
      link: "https://sansadigital.com/lps/webdesign",
    },
    {
      img: "/storage/mobile.webp",
      title: "Mobile development",
      list: ["iOS", "Android", "Cross platform"],
      link: "https://sansadigital.com/services/mobile-development-services-in-kenya",
    },
    {
      img: "/storage/seo.webp",
      title: "Digital Marketing",
      list: [
        "SEO",
        "Content Marketing",
        "Social Media Marketing",
        "Search Engine Marketing",
      ],
      link: "https://sansadigital.com/lps/digitalmarketing",
    },
    {
      img: "/storage/graphic.webp",
      title: "Graphic Design",
      desc: "Posters, banners, publications, flyers, and social media content. We shall create graphics that tell a story.",
      link: "https://sansadigital.com/services/graphic-design-in-kenya",
    },
    {
      img: "/storage/it.webp",
      title: "IT Support & Help Desk",
      list: [
        "System installation and configuration",
        "System Maintenance",
        "Consultancy",
        "Training",
      ],
      link: "https://sansadigital.com/lps/it-support-and-help-desk",
    },
    {
      img: "/storage/webhosting.webp",
      title: "Web Hosting",
      list: ["Affordable prices", "Free domain", "Free SSL", "Managed hosting"],
      link: "https://sansadigital.com/services/affordable-webhosting-services-in-kenya",
    },
  ];

  const directions = [
    { x: -100, y: 0 }, // top left
    { x: 0, y: -100 }, // top center
    { x: 100, y: 0 },  // top right
    { x: -100, y: 0 }, // bottom left
    { x: 0, y: 100 },  // bottom center
    { x: 100, y: 0 },  // bottom right
  ];

  return (
    <section id="section-services" className="py-16 text-white">
      <div id="section-placeholder-2"></div>

      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Our <span ref={el} className="text-[#2f976b]"></span>
        </h3>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: directions[index].x,
              y: directions[index].y,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between bg-[#193155] rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-500 p-5"
          >
            <div>
              <Image
                src={service.img}
                alt={service.title}
                width={600}
                height={400}
                className="w-1/6 rounded-md h-auto object-cover"
              />
              <div className="pt-5 flex flex-col justify-between h-[65%]">
                <h4 className="text-2xl text-[#2f976b] font-semibold mb-2">
                  {service.title}
                </h4>

                {service.desc && (
                  <p className="text-gray-300 text-lg mb-4">{service.desc}</p>
                )}

                {service.list && (
                  <ul className="text-gray-300 text-lg list-disc ml-4 mb-4">
                    {service.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <a
              href={service.link}
              className="group flex items-center justify-center w-1/6 aspect-square border border-[#2f976b] rounded-md hover:bg-[#2f976b] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="14"
                viewBox="0 0 30 16"
                fill="none"
                className="text-[#2f976b] group-hover:text-[#0f172a] transition-colors duration-300"
              >
                <path
                  d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>

      {/* More Services button */}
      <div className="flex justify-center mt-12">
        <a
          href="/services"
          className="bg-[#2c96e2] cursor-pointer hover:bg-[#2f976b] text-xl text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          More Services
        </a>
      </div>
    </section>
  );
}
