"use client";

import Image from 'next/image';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const EquipSection = () => {
    const el = useRef(null);
    const eb = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Services"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        showCursor: false,
    });
    return () => typed.destroy();
    }, []);

    useEffect(() => {
    const typedB = new Typed(eb.current, {
        strings: ["Vision"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        showCursor: false,
    });
    return () => typedB.destroy();
    }, []);
  return (
    <div className="flex justify-center items-center mx-auto mb-[275px]">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Text Content */}
        <div className="lg:w-5/12 md:w-full p-4 lg:pr-8">
          <h2 className="mt-[275px] text-3xl md:text-4xl font-semibold mb-10">
            We Equip Leaders With<br />
            <span ref={el} className="text-[#2f976b]"></span> & <span ref={eb} className="text-[#2f976b]"></span>
          </h2>
          
          <p className="text-white font-sans text-xl font-normal leading-normal mb-6">
            We also realised that professionals within the space are grossly mistreated, with strict timelines, underpayment or nonpayment. They also lack auxilliary skills such as communication and project management. The clients are not that safe either, with various malpractices in the industry such as fraud and non-performance of services.
          </p>
          
          <h3 className="text-3xl font-semibold text-[#2f976b] mb-10">
            What We Do Different
          </h3>
          
          <p className="text-white font-sans text-xl font-normal leading-normal">
            We, therefore, aim to change the landscape by bringing together professionals from various fields within the creative sector, and relieving them of the burden of dealing with clients so that they can focus on their work. As for clients, we also are relieving them of the burden of dealing with creatives and techies, especially if they are not from a technical or creative background, so that they can focus on growing their businesses.
          </p>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 md:w-full flex justify-center lg:justify-end">
          <div className="w-full h-[790px] mt-[300px] mr-[10%] relative">
            <Image 
              src="/storage/equip.png" 
              alt="equip" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipSection;