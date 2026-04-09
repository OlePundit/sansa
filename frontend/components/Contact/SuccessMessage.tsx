import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center bg-[#193155]/50 border border-white/8 rounded-3xl p-12 max-w-md w-full shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#2f976b]/15 border border-[#2f976b]/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#2f976b]" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
        <p className="text-gray-400 text-sm mb-8">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#2f976b] hover:bg-[#27825c] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
