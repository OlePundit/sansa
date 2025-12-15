'use client';
import { createContact } from "@/server/contact";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ✅ New loading state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLoading) return; // Prevent multiple submissions
    
    setIsLoading(true); // Start loading
    
    try {
      const res = await createContact({
        name: name,
        email: email,
        message: message,
      });
      
      if (res) {
        // Redirect to the success page
        router.push('/thanks');
      }
      console.log(res);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally show an error message to the user
    } finally {
      setIsLoading(false); // Stop loading regardless of success/error
    }
  };
  
  return (
    <div className="contact w-[90%] mx-auto">
      <div className="section-contact flex items-center justify-center my-24">
        <div className="w-full contact-wrap border border-[#aeabab] p-3 md:p-8 rounded-3xl flex flex-col xl:flex-row">
          
          {/* LEFT MAP */}
          <div className="map xl:mr-16 xl:pr-12 xl:border-r border-[#aeabab] mb-10 xl:mb-0">
            <iframe
              src="https://maps.google.com/maps?q=Kahawa%20Sukari&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="670"
              frameBorder="0"
              className="rounded-2xl"
              allowFullScreen
            ></iframe>
          </div>

          {/* RIGHT FORM */}
          <div className="xl:w-[60%]">
            <h3 className="text-center text-3xl md:text-4xl font-semibold">Contact Us</h3>
            <h4 className="text-white text-center font-medium text-xl mt-3 mb-7">
              Fill in your contact details
            </h4>

            <form
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                disabled={isLoading} // ✅ Disable during loading
                className="w-full h-14 border border-[#aeabab] bg-transparent rounded-2xl mb-6 p-3 text-white disabled:opacity-50"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="email"
                disabled={isLoading} // ✅ Disable during loading
                className="w-full h-14 border border-[#aeabab] bg-transparent rounded-2xl mb-6 p-3 text-white disabled:opacity-50"
                required
              />

              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                disabled={isLoading} // ✅ Disable during loading
                className="w-full h-40 border border-[#aeabab] bg-transparent rounded-2xl mb-6 p-3 text-white disabled:opacity-50"
                required
              ></textarea>

              <button 
                type="submit"
                disabled={isLoading} // ✅ Disable button during loading
                className="w-full xl:w-[556px] bg-[#2c96e2] hover:bg-[#2f976b] text-white text-center cursor-pointer text-xl font-semibold rounded-lg py-3 mt-5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    {/* White circular loading spinner */}
                    <svg 
                      className="animate-spin h-5 w-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </form>

            {/* CONTACT LINKS */}
            <ul className="flex flex-col lg:flex-row items-center justify-center mt-8 space-x-6">
              <li className="flex flex-col items-center text-center text-white">
                <a href="tel:+254112128055" className="text-[20px]">
                  <i className="fas fa-phone"></i> +254112128055
                </a>
              </li>

              <li className="flex flex-col items-center text-center text-white">
                <a href="mailto:info@sansadigital.com" className="text-[20px]">
                  <i className="fas fa-envelope"></i> info@sansadigital.com
                </a>
              </li>

              <li className="flex flex-col items-center text-center text-white">
                <a href="https://wa.me/+254112128055" className="text-[20px]">
                  <i className="fab fa-whatsapp"></i> online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}