'use client';

import { createContact } from '@/server/contact';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, Loader2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 112 128 055',
    href: 'tel:+254112128055',
    color: '#2f976b',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sansadigital.com',
    href: 'mailto:info@sansadigital.com',
    color: '#2c96e2',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Always online',
    href: 'https://wa.me/+254112128055',
    color: '#25D366',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#map',
    color: '#2f976b',
  },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await createContact({ name, email, message });
      if (res) {
        router.push('/thanks');
      } else {
        setError('Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24">
      {/* Section header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 bg-[#2f976b]/10 border border-[#2f976b]/25 text-[#2f976b] rounded-full px-4 py-1 text-xs font-medium mb-5">
          <span className="w-1.5 h-1.5 bg-[#2f976b] rounded-full animate-pulse" />
          Always available
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Get in Touch</h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
        </p>
      </motion.div>

      {/* Contact info cards */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {contactInfo.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col items-center text-center bg-[#193155]/50 border border-white/8 hover:border-white/15 rounded-2xl p-5 transition-all duration-200 group"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
            >
              <item.icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            <span className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</span>
            <span className="text-white text-sm font-medium group-hover:text-[#2f976b] transition-colors text-center leading-snug">
              {item.value}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Main content: form + map */}
      <div className="flex flex-col xl:flex-row gap-8 max-w-6xl mx-auto">

        {/* Form */}
        <motion.div
          className="flex-1 bg-[#193155]/40 border border-white/8 rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
          <p className="text-gray-400 text-sm mb-8">Fill in the form below and we'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium uppercase tracking-wide">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="John Doe"
                disabled={isLoading}
                required
                className="w-full h-12 bg-white/5 border border-white/10 focus:border-[#2f976b]/60 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200 disabled:opacity-50 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="john@example.com"
                disabled={isLoading}
                required
                className="w-full h-12 bg-white/5 border border-white/10 focus:border-[#2f976b]/60 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200 disabled:opacity-50 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium uppercase tracking-wide">Message</label>
              <textarea
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                disabled={isLoading}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 focus:border-[#2f976b]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200 disabled:opacity-50 resize-none text-sm"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-[#2f976b] hover:bg-[#27825c] text-white font-semibold py-3.5 rounded-xl transition-colors duration-300 shadow-lg shadow-[#2f976b]/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          id="map"
          className="flex-1 min-h-[400px] xl:min-h-0 rounded-3xl overflow-hidden border border-white/8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Kahawa%20Sukari&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: '420px', border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
