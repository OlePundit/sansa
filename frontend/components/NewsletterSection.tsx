"use client";

import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { subscribeNewsletter } from "@/server/newsletter";

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const result = await subscribeNewsletter(email);
    if (result.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setMsg(result.message);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4">
      <motion.div
        className="relative max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2f976b]/10 to-[#2c96e2]/10 rounded-3xl blur-xl" />

        <div className="relative bg-[#193155]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2f976b]/15 border border-[#2f976b]/30 rounded-2xl mb-6">
            <Mail className="w-6 h-6 text-[#2f976b]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay in the loop
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-sm mx-auto">
            Get the latest insights on web development, design trends, and digital marketing delivered to your inbox.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-[#2f976b] font-semibold"
            >
              <CheckCircle className="w-5 h-5" />
              You're subscribed! Thanks for joining.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2f976b]/60 focus:bg-white/8 transition-all duration-200 text-sm disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.03 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                className="cursor-pointer bg-[#2f976b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#27825c] transition-colors duration-300 whitespace-nowrap text-sm shadow-lg shadow-[#2f976b]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing…</>
                ) : 'Subscribe'}
              </motion.button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-xs mt-3">{msg}</p>
          )}

          <p className="text-gray-600 text-xs mt-4">No spam, ever. Unsubscribe at any time.</p>
        </div>
      </motion.div>
    </section>
  );
}
