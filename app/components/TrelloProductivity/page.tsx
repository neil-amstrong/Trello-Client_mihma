"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    title: "Inbox",
    description: "When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.",
    image: "/assets/slider1.avif",
  },
  {
    title: "Personal Task Board",
    description: "Drag and drop tasks to organize your day.",
    image: "/assets/slider2.png",
  },
  {
    title: "This week",
    description: "Review progress and update goals.",
    image: "/assets/slider3.avif",
  },
];

export default function TrelloProductivity() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Your productivity powerhouse</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Stay organized and efficient with Inbox, Boards, and Planner. Every to-do, idea, or responsibility—no matter how small—finds its place.
        </p>

    <div className="flex flex-col md:flex-row gap-12 md:h-[500px]">
  {/* Highlights */}
  <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6 w-full md:w-64 mb-6 md:mb-0">
    {slides.map((slide, index) => (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`cursor-pointer p-2 rounded-lg border transition flex-1 md:flex-none h-50 md:h-30 ${
          currentSlide === index
            ? "border-blue-600 bg-blue-50 shadow-md"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        <h3 className="font-bold text-lg mb-2">{slide.title}</h3>
        <p className="text-gray-600 text-sm">{slide.description}</p>
      </div>
    ))}
  </div>

  {/* Slider */}
  <div className="flex-1 relative overflow-hidden rounded-xl shadow-md h-full">
    <div className="flex items-center justify-between mb-4 px-2">
      <button onClick={prev} className="p-2 hover:bg-gray-100 rounded-full">
        <ChevronLeft />
      </button>
      <button onClick={next} className="p-2 hover:bg-gray-100 rounded-full">
        <ChevronRight />
      </button>
    </div>

    {/* Slides */}
    <div
      className="flex transition-transform duration-500 h-[calc(100%-3rem)]" // 3rem = approx header buttons height
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="min-w-full px-6 flex items-center justify-center">
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-auto max-w-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>

    {/* Pagination dots */}
    <div className="flex justify-center gap-2 mt-4">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</div>

      </div>
    </main>
  );
}
