"use client"; // if using Next 13+ App Router

import Image from "next/image";
import { motion } from "framer-motion"; // optional for bounce-in animations
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Peter Okata",
    image: "/storage/author.webp",
    text: "I cannot recommend Sansa Digital enough! Their team has been instrumental in managing my website and social media.",
    animation: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.8 } },
  },
  {
    id: 2,
    name: "Augustine Bundi",
    image: "/storage/author1.webp",
    text: "What they were able to accomplish, four other previous developers had failed",
    animation: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8 } },
  },
  {
    id: 3,
    name: "Emmanuel Msagha",
    image: "/storage/author2.webp",
    text: "Working with Sansa Digital was the best decision I could ever make in my journey as an entrepreneur",
    animation: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.8 } },
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-40 px-4">
      <h3 className="text-3xl md:text-4xl font-semibold">
        Testimonials
      </h3>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px] mt-40">
        {testimonials.map((t, idx) => {
          // Find the middle testimonial
          const middleIndex = Math.floor(testimonials.length / 2);
          const isMiddle = idx === middleIndex;

          return (
            <motion.div
              key={t.id}
              initial={t.animation.initial}
              animate={t.animation.animate}
              transition={t.animation.transition}
              className={`relative bg-[#193155] shadow-lg rounded-lg flex flex-col items-center pt-16 pb-10 px-10 w-full sm:w-[45%] lg:w-[30%] transform hover:-translate-y-5 transition-transform duration-300
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
      </div>
    </section>

  );
}
