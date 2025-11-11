"use client"; // if using Next 13+ App Router

import Image from "next/image";
import { motion } from "framer-motion"; // optional for bounce-in animations

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
      <h3 className="text-[64px] font-serif font-bold text-white mb-4 text-center">Testimonials</h3>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px]">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={t.animation.initial}
            animate={t.animation.animate}
            transition={t.animation.transition}
            className={`bg-[#193155] shadow-lg rounded-lg flex flex-col items-center p-10 w-full sm:w-[45%] lg:w-[30%] transform hover:-translate-y-5 transition-transform duration-300`}
          >
            <Image
              src={t.image}
              alt={t.name}
              width={120}
              height={120}
              className="rounded-full mb-6"
            />
            <h4 className="text-white font-serif font-bold text-xl text-center mb-4">{t.name}</h4>
            <p className="text-white font-sans text-base text-center">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
