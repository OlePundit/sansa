"use client";

import Image from "next/image";
import Link from "next/link";

export default function QuoteSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-10 sm:py-16 mb-50">
      <div className="relative flex items-center justify-center w-[85%] rounded-[32px] py-[50px] px-[30px] overflow-visible
                bg-gradient-to-br from-[#2c96e2] via-[#2f7ccf] to-[#1f5fa0]">
      <div className="absolute inset-0 bg-[url('/storage/texture.jpg')] bg-cover bg-no-repeat opacity-30 pointer-events-none rounded-[32px]"></div>
        <div className="absolute top-[30%] right-0 z-10">
          <Image
            src="/storage/hand.webp"
            alt="quote"
            width={500}
            height={400}
            className="w-3/4 h-auto pt-[50px]"
          />
        </div>

        {/* Quote Text + Button */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-[600px]">
          <h3 className="text-3xl md:text-4xl text-[#193155] font-semibold mb-4">
            REQUEST QUOTE
          </h3>
          <p className="text-white font-sans text-[20px] font-normal pb-3">
            Don’t be afraid to get in touch. Let us help shape your dreams into reality.
          </p>
          <Link
            href="/contact"
            className="text-[#2c96e2] text-[24px] cursor-pointer font-bold bg-white rounded-lg py-2 px-6 transition-all duration-300 hover:bg-[#193155] hover:text-white"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
