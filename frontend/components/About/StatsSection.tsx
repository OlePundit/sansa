"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Typed from "typed.js";
import { TrendingUp, Users, Calendar, Star } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 100, suffix: "+", label: "Projects Delivered", color: "#2f976b" },
  { icon: Users,      value: 50,  suffix: "+", label: "Happy Clients",      color: "#2c96e2" },
  { icon: Calendar,   value: 5,   suffix: "+", label: "Years Experience",   color: "#2f976b" },
  { icon: Star,       value: 95,  suffix: "%", label: "Success Rate",       color: "#2c96e2" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const el = useRef<HTMLSpanElement>(null);
  const eb = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const t = new Typed(el.current, { strings: ["Numbers"], typeSpeed: 80, loop: false, showCursor: false });
    return () => t.destroy();
  }, []);

  useEffect(() => {
    if (!eb.current) return;
    const t = new Typed(eb.current, { strings: ["Talking"], typeSpeed: 80, loop: false, showCursor: false });
    return () => t.destroy();
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="inline-flex items-center gap-2 bg-[#2f976b]/10 border border-[#2f976b]/25 text-[#2f976b] rounded-full px-4 py-1 text-xs font-medium mb-5">
          <span className="w-1.5 h-1.5 bg-[#2f976b] rounded-full" />
          By The Numbers
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Let Our{" "}
          <span ref={el} className="text-[#2f976b]" />
          {" "}Do The{" "}
          <span ref={eb} className="text-[#2f976b]" />
        </h2>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-[#193155]/50 border border-white/8 rounded-2xl p-6 sm:p-8 text-center hover:border-white/15 transition-all duration-300 overflow-hidden group"
          >
            {/* Background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}15, transparent 70%)` }}
            />

            <div
              className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto"
              style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
            >
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
            </div>

            <div
              className="relative text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tabular-nums"
              style={{ color: stat.color }}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>

            <p className="relative text-gray-400 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
