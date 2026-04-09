'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { urls } from '@/utils/urls';
import { useState } from 'react';

function CardImage({ thumbnail }: { thumbnail?: string }) {
  const [error, setError] = useState(false);
  const src = thumbnail ? urls.api.storage(thumbnail) : null;

  if (!src || error) {
    return (
      <div className="w-full h-36 bg-gradient-to-br from-[#193155] to-[#0d1a2d] flex items-center justify-center rounded-t-xl">
        <div className="w-10 h-10 rounded-lg bg-[#2f976b]/15 border border-[#2f976b]/25 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-[#2f976b]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-36 overflow-hidden rounded-t-xl">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function RelatedServices({ services, currentSlug }: { services: Service[]; currentSlug: string }) {
  const related = services
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Related Services</h2>
        <p className="text-gray-400 text-sm mt-1">Explore more of what we offer</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {related.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group"
          >
            <Link
              href={`/services/${service.slug}`}
              className="flex flex-col h-full bg-[#193155]/60 border border-white/8 rounded-xl overflow-hidden hover:border-[#2f976b]/40 transition-all duration-300"
            >
              <CardImage thumbnail={service.thumbnail} />
              <div className="p-4">
                {service.category && (
                  <span className="text-xs font-medium text-[#2c96e2] uppercase tracking-wide">
                    {service.category}
                  </span>
                )}
                <h3 className="text-white font-semibold text-sm mt-1 mb-2 leading-snug group-hover:text-[#2f976b] transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <div className="flex items-center gap-1 text-[#2f976b] text-xs font-semibold">
                  Learn More
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
