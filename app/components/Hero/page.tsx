'use client';

import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import VideoModal from "@/modal/VideoModal";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="font-poppins bg-gray-100 shadow min-h-screen w-full flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex items-center justify-center mt-20 sm:mt-0 px-4">
          <div className="p-4 sm:p-10 md:p-16 lg:p-20 max-w-xl flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-[40px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-bold leading-snug">
              Collect, manage, and conquer your tasks from any location
            </h1>
            <p className="mt-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-900">
              Break free from the mess—boost your productivity with Trello.
            </p>

        <div className="mt-6 w-full flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className=" hidden w-full sm:w-auto sm:block flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
               onClick={() => router.push('/pages/signup')}
              className="mt-2 sm:mt-0 sm:ml-[4px] px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                Sign Up for Free
              </button>
            </div>

           <p className="mt-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-900">
              By entering my email, i acknowledge the 
              <span className="text-blue-600 underline ml-1">WorkGrid Privacy Policy</span>
            </p>

            {/* Watch Video Button */}
            <div
              onClick={() => setShowVideo(true)}
              className="mt-8 underline text-blue-600 font-medium hover:underline cursor-pointer flex items-center gap-2"
            >
              <span>Watch Video</span>
              <FaPlayCircle size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex items-center justify-center mt-10 sm:mt-0 ">
          <div className="p-4 sm:p-10 md:p-16 lg:p-20 max-w-xl flex flex-col items-center text-center">
<img
  src="/assets/b.jpg"
  alt="Hero illustration"
  className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1200px] h-auto"
/>

           {/** 
            <img 
           src="/assets/arrow.png"
           alt="arrow"
           className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[250px] h-auto object-contain"
           />
            <img 
           src="/assets/blue.jpg"
           alt="blue"
           className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[250px] h-auto object-contain"
           />
            <img 
           src="/assets/media.png"
           alt="media"
           className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[250px] h-auto object-contain"
           />
            <img 
           src="/assets/yellow.jpg"
           alt="Hero illustration"
           className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[250px] h-auto object-contain"
           />
           */}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </>
  );
}
