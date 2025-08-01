"use client";

import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const dates = ["03", "04", "05", "06", "07"];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/mt-bromo.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            VISIT
            <br />
            INDONESIA
          </h1>

          {/* Description */}
          <div className="max-w-md mb-8">
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Mount Bromo is a majestic located in East Java, Indonesia. It is
              one of the most famous tourist destinations in Indonesia.
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              This Island is one of the most beautiful of Indonesia's eastern.
              The island is the eastern part of the Lesser Sunda Islands.
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 group">
            <span className="text-sm tracking-wider">SWIPE</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 delay-75" />
          </button>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-4">
          {dates.map((date, index) => (
            <div
              key={date}
              className={`text-right cursor-pointer transition-all duration-300 ${
                index === 0
                  ? "text-white text-lg font-semibold"
                  : "text-white/50 text-sm hover:text-white/80"
              }`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
