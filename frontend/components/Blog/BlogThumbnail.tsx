'use client';

import { motion } from 'framer-motion';
import { urls } from '@/utils/urls';
import SharedNavbar from '@/components/SharedNavbar';
import { Service } from '@/types';

export default function BlogThumbnail({
  thumbnail,
  title,
  services,
}: {
  thumbnail: string;
  title: string;
  services: Service[];
}) {
  const thumbnailUrl = thumbnail
    ? thumbnail.startsWith('http')
      ? thumbnail
      : urls.api.storage(thumbnail)
    : null;

  return (
    <div>
      <SharedNavbar services={services} />

      {/* Hero */}
      <div
        className="relative w-full min-h-[60vh] bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{
          backgroundImage: [
            'linear-gradient(to bottom, rgba(13,26,45,0.75) 0%, rgba(13,26,45,0.4) 60%, rgba(23,23,23,0.95) 100%)',
            thumbnailUrl ? `url('${thumbnailUrl}')` : undefined,
          ]
            .filter(Boolean)
            .join(', '),
          backgroundColor: thumbnailUrl ? undefined : '#0d1a2d',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-[#2f976b] text-xs font-semibold tracking-widest uppercase mb-4">
              Home &nbsp;/&nbsp; Blogs
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
