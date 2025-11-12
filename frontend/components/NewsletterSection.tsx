"use client";

export default function NewsletterSection() {
  return (
    <div className="flex items-center justify-center mb-48">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center mt-48 sm:col-span-12">
          <form 
            action="/n" 
            method="post"
            className="border border-white rounded-lg p-8"
          >
            <h3 className="text-3xl text-[#2f976b] font-semibold whitespace-nowrap mb-3">
              Subscribe to our Newsletter
            </h3>
            <input 
              type="email" 
              name="email" 
              className="w-full px-3 py-2 bg-transparent border border-white rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
            />
            <button 
              type="submit"
              className="bg-[#2c96e2] px-6 py-2 rounded-md font-bold text-white mt-4 text-xl hover:bg-[#2f976b] hover:text-[#193155] transition-colors duration-200"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}