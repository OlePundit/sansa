"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function PricesSection() {
    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Ideas"], // words to type
      typeSpeed: 50,
      showCursor: false,
      loop: false, // optional
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);
  return (
    <div className="section-prices py-10" id="section-prices">
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
          <div className="absolute md:left-1/2 md:transform md:translate-y-1/2 md:top-1/2 md:px-30 px-10 top-[20%]">
            <h1 className="text-3xl md:text:4xl font-bold text-white leading-snug text-left">
              Let us help you bring your <span ref={el} className="text-[#2f976b]"></span> to life
            </h1>
          </div>
        </div>
      </div>
    </div>

  );
}
