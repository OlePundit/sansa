"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  faq1?: string;
  faq2?: string;
  faq3?: string;
  faq4?: string;
  faq5?: string;
  ans1?: string;
  ans2?: string;
  ans3?: string;
  ans4?: string;
  ans5?: string;
}

export default function FaqSection({
  faq1, faq2, faq3, faq4, faq5,
  ans1, ans2, ans3, ans4, ans5,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { question: faq1, answer: ans1 },
    { question: faq2, answer: ans2 },
    { question: faq3, answer: ans3 },
    { question: faq4, answer: ans4 },
    { question: faq5, answer: ans5 },
  ].filter((f) => f.question);

  if (!faqs.length) return null;

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 bg-[#2c96e2]/10 border border-[#2c96e2]/25 text-[#2c96e2] rounded-full px-4 py-1 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 bg-[#2c96e2] rounded-full" />
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div className="bg-[#193155]/50 border border-white/8 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-colors duration-200"
              >
                <span className="font-semibold text-white text-sm sm:text-base pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5"
                >
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-white/5">
                      <div
                        className="lp-benefits text-gray-300 text-sm leading-relaxed pt-4"
                        dangerouslySetInnerHTML={{ __html: faq.answer ?? '' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
