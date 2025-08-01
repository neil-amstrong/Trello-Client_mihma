"use client";

import { FaInstagram, FaFacebookF,FaLinkedinIn,FaTwitter,FaYoutube} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-[#0C234B] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 border-b border-white-900 pb-8">
          <div>
             <div className="text-xs font-bold text-blue-700">WorkGrid</div>
            <h2 className="text-2xl font-bold mb-2">Trello</h2>
            <a href="/pages/login" className="text-sm hover:underline">
              Log In
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Trello</h3>
            <p className="text-sm text-gray-300">What’s behind the boards.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Jobs</h3>
            <p className="text-sm text-gray-300">Learn about open roles on the Trello team.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Apps</h3>
            <p className="text-sm text-gray-300">
              Download the Trello App for your Desktop or Mobile devices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-300">
          Need anything? Get in touch and we can help.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-400">

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
           <div className="relative">
     <select
    className="text-sm text-white-600 px-2 py-1 rounded-md focus:outline-none "
    defaultValue="en"
      >
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="es">Spanish</option>
    <option value="de">German</option>
    <option value="pt">Portuguese</option>
       </select>
       </div>

            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <span>Copyright © 2025 WorkGrid</span>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0 text-lg text-white">
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
