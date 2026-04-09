"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Users, Briefcase, Shield, Zap } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "We champion creatives",
    desc: "We bring together professionals from various fields within the creative sector and relieve them of the burden of client management.",
  },
  {
    icon: Briefcase,
    title: "We protect clients",
    desc: "We shield clients from dealing with techies and creatives directly, so they can focus on growing their businesses.",
  },
  {
    icon: Shield,
    title: "Zero tolerance for fraud",
    desc: "We maintain strict ethical standards — no malpractice, no non-performance, no underpayment of talent.",
  },
  {
    icon: Zap,
    title: "Full-service agency",
    desc: "From concept to deployment, we handle every stage so you don't have to juggle multiple vendors.",
  },
];


export default function EquipSection() {
  const el = useRef<HTMLSpanElement>(null);
  const eb = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const t = new Typed(el.current, { strings: ["Services"], typeSpeed: 80, loop: false, showCursor: false });
    return () => t.destroy();
  }, []);

  useEffect(() => {
    if (!eb.current) return;
    const t = new Typed(eb.current, { strings: ["Vision"], typeSpeed: 80, loop: false, showCursor: false });
    return () => t.destroy();
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="inline-flex items-center gap-2 bg-[#2c96e2]/10 border border-[#2c96e2]/25 text-[#2c96e2] rounded-full px-4 py-1 text-xs font-medium mb-5">
          <span className="w-1.5 h-1.5 bg-[#2c96e2] rounded-full" />
          Our Mission
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
          We Provide Business Leaders With{" "}
          <br className="hidden sm:block" />
          <span ref={el} className="text-[#2f976b]" />
          {" "}& <span ref={eb} className="text-[#2f976b]" />
        </h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left — image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2c96e2]/15 to-[#2f976b]/10 rounded-3xl blur-2xl" />
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#2c96e2]/25 rounded-2xl" />
            <Image
              src="/storage/equip.jpg"
              alt="Equip leaders"
              width={500}
              height={600}
              className="relative rounded-2xl object-cover shadow-2xl w-full max-h-[600px]"
            />
          </div>
        </motion.div>

        {/* Right — text + cards */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.p
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We also realised that professionals within the space are lack essential skillsets like — proper project pricing, and implementing and adhering to project timelines. This leads to conflict between the client and the service provider, which is detrimental to both parties. We exist to solve this problem by equipping creatives with the skills they need to succeed, while also protecting clients from the pitfalls of working with under-skilled providers.
          </motion.p>

          <motion.h3
            className="text-xl sm:text-2xl font-bold text-[#2f976b]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What We Do Different
          </motion.h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#193155]/50 border border-white/8 rounded-2xl p-5 hover:border-[#2f976b]/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#2f976b]/10 border border-[#2f976b]/25 rounded-xl mb-3">
                  <item.icon className="w-5 h-5 text-[#2f976b]" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
