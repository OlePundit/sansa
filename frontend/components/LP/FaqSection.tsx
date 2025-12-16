"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronRight } from "lucide-react";

// Define the props interface
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
  ans1, ans2, ans3, ans4, ans5
}: FaqSectionProps) {

  // Convert props → array
  const faqs = [
    { question: faq1, answer: ans1 },
    { question: faq2, answer: ans2 },
    { question: faq3, answer: ans3 },
    { question: faq4, answer: ans4 },
    { question: faq5, answer: ans5 },
  ].filter(f => f.question);

  return (
    <section className="w-full py-10 md:py-16">
      <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h3>
      
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }: { open: boolean }) => (
              <div className="mb-4">
                <Disclosure.Button className="flex justify-between items-center w-full p-4 bg-[#193155] rounded-lg text-left hover:bg-[#1e3a5e] transition-colors duration-200">
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#1a2b44] rounded-b-lg">
                  <p className="text-gray-300">{faq.answer}</p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}