"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectsSection() {
  const logos = [
    "/storage/gov-logo.webp",
    "/storage/dcoce.webp",
    "/storage/cpa_logo.webp",
    "/storage/landscape.svg",
    "/storage/kimuzi-logo.webp",
    "/storage/chenaniah-logo.webp",
    "/storage/ictalogo.webp",
    "/storage/pink-final.webp",
    "/storage/renters.webp",
    "/storage/kfc.webp",
    "/storage/stima.webp",
    "/storage/logo.webp",
    "/storage/callapr.png",
    "/storage/tvet.webp",
    "/storage/africads.png",
    "/storage/bell-consultants.webp",
    "/storage/allure.png",
    "/storage/IPF.webp",
    "/storage/maji.webp",
    "/storage/safari.png",
  ];

  return (
    <div className="section-projects" id="section-projects">
      <div id="section-placeholder-4"></div>

      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold">
          Our{" "}
          <span id="typing-container-4" className="text-[#2f976b]">
            Projects
          </span>
        </h3>
      </div>

      <div className="swiper-container w-full">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 600,
            disableOnInteraction: false,
          }}
          speed={5000000}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 4, spaceBetween: 40 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper1"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  width="120"
                  height="120"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
