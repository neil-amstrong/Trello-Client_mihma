
"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-blue-900">WORK SMARTER</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">
          Do more with Trello
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl">
          Customize the way you organize with easy integrations, automation, and
          mirroring of your to-dos across multiple locations.
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col">
            <div className="h-12 w-12 mb-4 relative">
              <Image
                src= "/assets/three1.jpg"
                alt="Integrations"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Integrations
            </h3>
            <p className="text-gray-700 mb-4">
              Connect the apps you are already using into your Trello workflow
              or add a Power-Up to fine-tune your specific needs.
            </p>
            <button className="mt-auto border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
              Browse Integrations
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col">
            <div className="h-12 w-16 mb-4 relative">
              <Image
               src= "/assets/three2.jpg"
                alt="Butler Automation"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Butler Automation
            </h3>
            <p className="text-gray-700 mb-4">
              No-code automation is built into every Trello board. Focus on the
              work that matters most and let the robots do the rest.
            </p>
            <button className="mt-auto border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
              Get to know Automation
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col">
            <div className="h-12 w-12 mb-4 relative">
              <Image
                src= "/assets/three3.jpg"
                alt="Card Mirroring"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Card mirroring
            </h3>
            <p className="text-gray-700 mb-4">
              View all your to-dos from multiple boards in one place. Mirror a
              card to keep track of work wherever you need it!
            </p>
            <button className="mt-auto border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
              Compare plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
