"use client";

export default function NewsletterSection() {
  return (
    <div className="flex items-center justify-center mb-48 sm:py-10 py-16">
      <div className="flex items-center justify-center sm:w-full w-3/4">
        <div className="flex items-center justify-center mt-48 w-full">
          <form 
            action="/n" 
            method="post"
            className="border border-white rounded-lg p-8 flex flex-col items-center justify-center w-full"
          >
            <h3 className="text-xl md:text-3xl text-[#2f976b] font-semibold md:whitespace-nowrap mb-3">
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
              className="bg-[#2c96e2] px-6 py-2 cursor-pointer rounded-md font-bold text-white mt-5 text-xl hover:bg-[#2f976b] hover:text-[#193155] transition-colors duration-200"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}