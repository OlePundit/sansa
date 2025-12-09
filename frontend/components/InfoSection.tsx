"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function InfoSection() {
    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Solutions"], // words to type
      typeSpeed: 50,
      showCursor: false,
      loop: false, // optional
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);
  return (
    <section
      id="section-info"
      className="flex flex-col-reverse lg:flex-row justify-between items-center py-16 px-4 lg:px-12 mt-10"
    >
      {/* Left column with cards */}
      <div className="w-full lg:w-5/12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        {/* Card 1 — Raised effect */}
        <div className="bg-[#193155] rounded-2xl shadow-2xl shadow-[#00000040] overflow-hidden transform translate-y-[-40px] transition duration-700 hover:scale-105 animate-flipInY">
        <Image
            src="/storage/tech.webp"
            alt="cutting-edge"
            width={1400}
            height={900}
            className="w-full object-cover"
        />
        <div className="p-5">
            <h5 className="text-lg font-semibold">Cutting edge technology</h5>
            <p className="text-gray-400 text-md mt-1">
            We employ emerging technologies
            </p>
        </div>
        </div>


        {/* Card 2 */}
        <div className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transform transition duration-700 hover:rotate-1 animate-flipInX">
          <Image
            src="/storage/data.webp"
            alt="data"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5">
            <h5 className="text-lg font-semibold">Data driven marketing</h5>
            <p className="text-gray-400 text-md mt-1">
              Our marketing is informed by the data
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transform transition duration-700 hover:rotate-1 animate-flipInY">
          <Image
            src="/storage/bold.webp"
            alt="bold"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5">
            <h5 className="text-lg font-semibold">We are Bold</h5>
            <p className="text-gray-400 text-md mt-1">
              We are not afraid to try new techniques
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#193155] rounded-2xl shadow-lg overflow-hidden transform transition duration-700 hover:rotate-1 animate-flipInX">
          <Image
            src="/storage/limit.webp"
            alt="limits"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <div className="p-5">
            <h5 className="text-lg font-semibold">We Push the limits</h5>
            <p className="text-gray-400 text-md mt-1">
              We defy the rules and push the limits
            </p>
          </div>
        </div>
      </div>

      {/* Right column with info */}
      <div className="w-full lg:w-6/12 flex flex-col justify-center items-start text-left mb-12 lg:mb-0 ml-10">
        <h2 className="text-4xl lg:text-4xl font-bold leading-snug mb-4">
          We Provide <span ref={el} className="text-[#2f976b]"></span> To Your Problems
        </h2>
        <p className="mb-6 text-xl">
          We are a team of experts from different technical and creative
          backgrounds, with one goal in mind — to change the competitive
          landscape in the space.
        </p>
        <a
          href="/#section-services"
          className="bg-[#2c96e2] cursor-pointer text-white text-xl font-bold px-6 py-2 rounded-md shadow hover:bg-[#2f976b] transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
