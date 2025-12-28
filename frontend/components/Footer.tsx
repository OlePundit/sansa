'use client';
import { Mail } from "lucide-react";
import { MessageCircle, Phone, Smartphone } from "lucide-react"; // Standard WhatsApp-style icon

<Smartphone className="w-6 h-6" />
export default function Footer() {
    const whatsappColors = {
    green: "#25D366",     // Main green
    lightGreen: "#128C7E", // Darker green for hover
    teal: "#075E54",      // Dark teal
    blue: "#34B7F1",      // Light blue (for some accents)
    };
  return (
    <footer className="bg-[#193155] text-white py-10 w-full">
      <div className="flex flex-col items-center justify-center w-full px-4">
        {/* Footer wrap */}
        <div className="flex flex-col lg:flex-row w-full justify-between lg:w-4/5 gap-10 lg:gap-20">
          {/* QUICK LINKS */}
          <div className="flex flex-col">
            <h4 className="text-2xl lg:text-3xl font-bold pb-3">QUICK LINKS</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/" className="text-white hover:underline text-base lg:text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="/#section-projects" className="text-white hover:underline text-base lg:text-lg">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#section-prices" className="text-white hover:underline text-base lg:text-lg">
                  Packages
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:underline text-base lg:text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:underline text-base lg:text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-white hover:underline text-base lg:text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="flex flex-col">
            <h4 className="text-2xl lg:text-3xl font-bold pb-3">CONTACT US</h4>
            <ul className="flex flex-col gap-2 text-base lg:text-lg">
              <li>
                <a href="mailto:info@sansadigital.com" className="flex items-center gap-2">
                  <Mail className="w-6 h-6" /> info@sansadigital.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/+254112128055" className="flex items-center gap-2">
                <div className="relative p-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full">
                <MessageCircle className="w-5 h-5 text-white" />
                <Phone className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div> always online
                </a>
              </li>
              <li>
                <a href="tel:+254112128055" className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6" /> +254112128055
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL + Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-2xl lg:text-3xl font-bold pb-3">SOCIAL</h4>
            <div className="flex gap-4 mb-4">
              {/* Twitter */}
              <a
                href="https://twitter.com/SansaDigital"
                className="flex justify-center items-center w-10 h-10 border border-white rounded-md hover:bg-white hover:text-[#193155] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href=""
                className="flex justify-center items-center w-10 h-10 border border-white rounded-md hover:bg-white hover:text-[#193155] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sansa-digital"
                className="flex justify-center items-center w-10 h-10 border border-white rounded-md hover:bg-white hover:text-[#193155] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Form */}
            <form action="/n" method="post" className="flex flex-col border border-white rounded-md p-4">
              <h3 className="text-lg mb-2">Subscribe to our Newsletter</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mb-3 p-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#2c96e2] text-white py-2 px-4 rounded-md text-lg font-semibold hover:cursor-pointer hover:bg-[#2f976b] hover:text-[#193155] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-2 text-base lg:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-c-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z" />
          </svg>
            <span className="mx-2">Sansa Digital - {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
