'use client';

import { Mail, Smartphone, MessageCircle, ArrowUpRight, Loader2, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { subscribeNewsletter } from '@/server/newsletter';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#section-projects', label: 'Clients' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/blogs', label: 'Blog' },
];

const socials = [
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/SansaDigital',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sansa-digital',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
      </svg>
    ),
  },
];

function FooterNewsletter() {
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

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-[#2f976b] text-sm">
        <CheckCircle className="w-4 h-4 flex-shrink-0" />
        <span>You're subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#2f976b]/50 transition-colors disabled:opacity-50"
      />
      {status === 'error' && <p className="text-red-400 text-xs">{msg}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-[#2f976b] hover:bg-[#27825c] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Subscribing…</>
        ) : (
          <>Subscribe <ArrowUpRight className="w-3.5 h-3.5" /></>
        )}
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1a2d] border-t border-white/5 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/storage/whiteai.png" alt="Sansa Digital" width="160" className="mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kenya's #1 tech and creative agency helping brands bring their ideas to life.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-400 hover:border-[#2f976b]/50 hover:text-[#2f976b] hover:bg-[#2f976b]/5 transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#2f976b]">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="mailto:info@sansadigital.com"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 group-hover:border-[#2c96e2]/40 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  info@sansadigital.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+254112128055"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 group-hover:border-[#2c96e2]/40 transition-colors">
                    <Smartphone className="w-3.5 h-3.5" />
                  </span>
                  +254 112 128 055
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/+254112128055"
                  target="_blank"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#25D366] transition-colors group"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[#25D366]/8 border border-[#25D366]/20 group-hover:border-[#25D366]/50 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  </span>
                  WhatsApp — Always online
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get the latest updates delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Sansa Digital. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
