"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function PricesSection() {
    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Experience"], // words to type
      typeSpeed: 50,
      showCursor: false,
      loop: false, // optional
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);
  return (
    <div className="section-prices" id="section-prices">
      <div className="w-screen flex items-end mt-[200px] relative">
        <div
          className="mid-banner w-full h-screen relative z-[1] bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: `
              radial-gradient(104.85% 104.85% at 50% 0%, rgba(23,23,23,0) 61%, #171717 90.5%),
              radial-gradient(104.85% 104.85% at 50% 100%, rgba(23,23,23,0) 61%, #171717 90.5%),
              url('/storage/mid.webp')
            `,
          }}
        >
          <div className="absolute left-1/2 transform -translate-y-1/2 top-1/2 px-8">
            <h1 className="text-4xl font-semibold text-white leading-snug text-left">
              We Have <span ref={el} className="text-[#2f976b]"></span> and skills across different sectors
            </h1>
          </div>
        </div>
      </div>
    </div>

  );
}
