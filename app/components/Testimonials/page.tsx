import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    quote:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    author: "Jefferson Scomacao",
    role: "Development Manager at IKEA/PTC",
    logo: "/assets/ptc-logo.svg",
    source: "Read the story",
    highlight: "74% of customers say Trello has improved communication with their co-workers and teams.",
    sourceLink: "Trello TechValidate Survey",
  },
  {
    quote:
      "Trello has been an invaluable tool for team coordination, especially during remote work. It makes progress transparent and accessible.",
    author: "Sasha Martinez",
    role: "Product Lead at Coinbase",
    logo: "/assets/coinbase.svg",
    source: "Read the story",
    highlight: "Trello increased our project delivery rate by over 30%.",
    sourceLink: "Coinbase Case Study",
  },
  {
    quote:
      "With Trello, we streamlined cross-functional collaboration and reduced our project planning time by weeks.",
    author: "Alex Kim",
    role: "Operations Manager at Zoom",
    logo: "/assets/zoom.svg",
    source: "Read the story",
    highlight: "85% of our teams say Trello made collaboration simpler.",
    sourceLink: "Zoom Productivity Report",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden shadow-sm border transition-all duration-500">
          {/* Left: Quote Section */}
          <div className="flex-1 bg-white p-8 flex flex-col justify-between">
            <div className="text-lg text-gray-800">
              {slides[current].quote}
            </div>
            <div className="mt-6">
              <hr className="w-12 border-gray-400 mb-2" />
              <p className="font-semibold text-gray-800">
                {slides[current].author}
              </p>
              <p className="text-sm text-gray-600">
                {slides[current].role}
              </p>
              <div className="flex items-center mt-4">
                <img src={slides[current].logo} alt="logo" className="h-6 mr-3" />
                <a href="#" className="text-blue-700 text-sm hover:underline">
                  {slides[current].source}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Highlight Section */}
          <div className="bg-blue-800 text-white w-full lg:w-[40%] p-8 flex flex-col justify-between">
            <p className="text-2xl font-bold leading-snug">
              {slides[current].highlight}
            </p>
            <a href="#" className="text-blue-200 underline text-sm mt-4">
              {slides[current].sourceLink}
            </a>
          </div>
        </div>

        {/* Pagination and Controls */}
        <div className="flex justify-center items-center gap-4 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-gray-800" : "bg-gray-300"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
          <button onClick={prev} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Logo Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-700 mb-6">
            Join a community of millions of users globally who are using Trello to get more done.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src="/assets/sponsors.png"    
               alt="Sponsors"
               className="h-12 sm:h-16 md:h-20 w-auto max-w-full object-contain" />
            
          </div>
        </div>
      </div>
    </section>
  );
}