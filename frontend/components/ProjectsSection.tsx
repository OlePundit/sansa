'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Typed from "typed.js";

const logos = [
  '/storage/gov-logo.webp',
  '/storage/dcoce.webp',
  '/storage/cpa_logo.webp',
  '/storage/landscape.svg',
  '/storage/kimuzi-logo.webp',
  '/storage/chenaniah-logo.webp',
  '/storage/ictalogo.webp',
  '/storage/pink-final.webp',
  '/storage/renters.webp',
  '/storage/kfc.webp',
  '/storage/stima.webp',
  '/storage/logo.webp',
  '/storage/callapr.png',
  '/storage/tvet.webp',
  '/storage/africads.png',
  '/storage/bell-consultants.webp',
  '/storage/allure.png',
  '/storage/IPF.webp',
  '/storage/maji.webp',
  '/storage/safari.png',
];

export default function ProjectsSection() {
  const el = useRef(null);
  useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ["Clients"], // words to type
    typeSpeed: 50,
    showCursor: false,
    loop: false, // optional
  });

  return () => {
    typed.destroy(); // cleanup on unmount
  };
}, []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="section-projects py-10 w-full" id="section-projects">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold">
          Our <span ref={el} className="text-[#2f976b]"></span>
        </h3>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {logos.map((logo, index) => (
            <div
              className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_25%] p-4 flex justify-center items-center"
              key={index}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                width="120"
                height="120"
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn('Failed to load:', logo);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-5 h-1.5 rounded-md transition-colors ${
              index === selectedIndex ? 'bg-[#2f976b]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
