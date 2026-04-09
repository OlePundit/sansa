'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { urls } from '@/utils/urls';
import { useState } from 'react';

function ServiceThumbnail({ thumbnail }: { thumbnail?: string }) {
  const [error, setError] = useState(false);
  const src = thumbnail ? urls.api.storage(thumbnail) : null;

  if (!src || error) {
    return (
      <div className="w-full h-44 bg-gradient-to-br from-[#193155] to-[#0d1a2d] flex items-center justify-center rounded-t-2xl">
        <div className="w-12 h-12 rounded-xl bg-[#2f976b]/15 border border-[#2f976b]/25 flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-[#2f976b]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-44 overflow-hidden rounded-t-2xl">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid({ services }: { services: Service[] }) {
  if (!services.length) {
    return (
      <div className="py-20 text-center text-gray-400">No services found.</div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group"
          >
            <Link
              href={`/services/${service.slug}`}
              className="flex flex-col h-full bg-[#193155]/60 border border-white/8 rounded-2xl overflow-hidden hover:border-[#2f976b]/40 transition-all duration-300 shadow-lg hover:shadow-[#2f976b]/10 hover:shadow-xl"
            >
              <ServiceThumbnail thumbnail={service.thumbnail} />

              <div className="flex flex-col flex-1 p-5">
                {(service.category || service.sub_category) && (
                  <div className="flex items-center gap-2 mb-2">
                    {service.category && (
                      <span className="text-xs font-medium text-[#2c96e2] uppercase tracking-wide">
                        {service.category}
                      </span>
                    )}
                    {service.category && service.sub_category && (
                      <span className="text-xs text-gray-500">›</span>
                    )}
                    {service.sub_category && (
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {service.sub_category}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="text-white font-semibold text-lg mb-2 leading-snug group-hover:text-[#2f976b] transition-colors duration-200">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {service.description}
                  </p>
                )}

                <div className="flex items-center gap-1.5 text-[#2f976b] text-sm font-semibold mt-auto pt-3 border-t border-white/5">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
