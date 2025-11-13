"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function SectionInfo() {
    const el = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Story"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        showCursor: false,
    });
    return () => typed.destroy();
    }, []);
  return (
    <section
      id="section-info"
      className="about-section-info flex flex-col lg:flex-row justify-center items-center w-full mx-auto text-white px-6 lg:px-12"
    >
      {/* Left column - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/storage/person.png"
          alt="person"
          width={500}
          height={500}
          className="ml-[20%] object-contain"
        />
      </div>

      {/* Right column - Text */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Our <span ref={el} className="text-[#2f976b]"></span>
        </h2>

        <p className="text-[20px] font-[Montserrat] font-normal text-white leading-normal mb-6 mr-[30%]">
          We discovered that there was a gap in the market, in terms of access to creative and ICT
          services to small and medium business, despite the fact that they are still in need of the
          same services.
        </p>

        <p className="text-[20px] font-[Montserrat] font-normal text-white leading-normal mb-6 mr-[30%]">
          Client relationship training, branding and marketing are just but some of the services
          that they lack due to affordability — these businesses cannot afford to procure the
          services of big marketing or digital agencies. So our aim was to specifically target SMEs
          and MSMEs with competitive packages, while still maintaining the same quality of service
          that a higher level agency can provide.
        </p>

        <Link href="/blogs">
          <button
            className="mt-3 rounded-md bg-[#2c96e2] px-4 py-2 text-xl font-bold font-bold text-white hover:bg-[#2f976b] transition-all duration-300"
          >
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
