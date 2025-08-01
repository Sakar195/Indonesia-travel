"use client";

import { Play } from "lucide-react";

export const TravelSection = () => {
  const galleryImages = [
    "/images/beach-1.jpg",
    "/images/temple-2.jpg",
    "/images/diving-3.jpg",
    "/images/mountain-4.jpg",
    "/images/sunset-5.jpg",
    "/images/culture-6.jpg",
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/images/main-gallery.jpg')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
              TRAVEL AND
              <br />
              ENJOY YOUR
              <br />
              HOLIDAY
            </h2>

            {/* Holiday Selection */}
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-white text-sm tracking-wide font-medium">
                choose your fun holiday
              </span>
            </div>

            {/* Description */}
            <p className="text-white/90 text-sm leading-relaxed max-w-md mb-8 bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              The Raja Ampat Islands are a group of islands located in the
              westernmost of the Bird&apos;s Head Peninsula on the island of New
              Guinea. Administratively, this cluster is under Raja Ampat
              Regency, West Papua Province, Indonesia.
            </p>

            {/* Video Play Button */}
            <button className="flex items-center space-x-3 group bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <Play className="w-5 h-5 text-white ml-1" fill="white" />
              </div>
              <span className="text-white text-sm font-medium">
                Watch Video
              </span>
            </button>
          </div>

          {/* Right Content - Small Gallery Grid */}
          <div className="relative">
            {/* Small Gallery Grid */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className="relative h-28 overflow-hidden rounded-lg cursor-pointer group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  {/* Subtle border */}
                  <div className="absolute inset-0 border border-white/20 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
