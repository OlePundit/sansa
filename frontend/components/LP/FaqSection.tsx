"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronRight } from "lucide-react";
import { FaqSectionProps } from '@/types';


export default function FaqSection({
  faq1, faq2, faq3, faq4, faq5,
  ans1, ans2, ans3, ans4, ans5
}: FaqSectionProps) {

  // Convert props → array
  const faqs = [
    { question: faq1, answer: ans1 },
    { question: faq2, answer: ans2 },
    { question: faq3, answer: ans3 },
    { question: faq4, answer: ans4 },
    { question: faq5, answer: ans5 },
  ].filter(f => f.question); // remove empty ones

  return (
    <div className="lp w-full my-24 flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>

      <div className="w-full max-w-3xl">
        {faqs.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="accordion-item mb-6 bg-[#2c96e2] rounded-lg overflow-hidden text-white">

                {/* Button */}
                <Disclosure.Button
                  className={`accordion-button flex w-full justify-between items-center px-5 py-4 text-left font-semibold text-lg transition
                    ${open ? "bg-[#2c96e2]" : "bg-[#2c96e2]/80"}
                  `}
                >
                  <span>{item.question}</span>

                  {/* Rotating Arrow */}
                  <ChevronRight
                    className={`h-6 w-6 text-white transition-transform ${
                      open ? "rotate-180" : "rotate-90"
                    }`}
                  />
                </Disclosure.Button>

                {/* Panel */}
                <Disclosure.Panel className="px-5 py-4 bg-white text-black">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </Disclosure.Panel>

              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
