"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      id: 1,
      image: "/images/mt-bromo.jpg",
      title: "VISIT\nINDONESIA",
      description:
        "Mount Bromo is a majestic located in East Java, Indonesia. It is one of the most famous tourist destinations in Indonesia.",
      subDescription:
        "This Island is one of the most beautiful of Indonesia&apos;s eastern. The island is the eastern part of the Lesser Sunda Islands.",
    },
    {
      id: 2,
      image: "/images/raja-ampat.jpg",
      title: "EXPLORE\nRAJA AMPAT",
      description:
        "Raja Ampat Islands offer pristine waters and incredible marine biodiversity. Perfect for diving and underwater photography.",
      subDescription:
        "Known as the Crown Jewel of Marine Biodiversity, Raja Ampat is home to over 1,500 species of fish.",
    },
    {
      id: 3,
      image: "/images/banda-island.jpg",
      title: "DISCOVER\nBANDA ISLANDS",
      description:
        "Historic spice islands with rich cultural heritage and stunning underwater landscapes for diving enthusiasts.",
      subDescription:
        "The Banda Islands were once the world&apos;s only source of nutmeg and mace, making them incredibly valuable.",
    },
    {
      id: 4,
      image: "/images/penida-island.jpg",
      title: "EXPERIENCE\nPENIDA ISLAND",
      description:
        "Dramatic cliffs, crystal clear waters, and unique rock formations make Penida Island a photographer&apos;s paradise.",
      subDescription:
        "Located southeast of Bali, Nusa Penida offers breathtaking viewpoints and pristine beaches.",
    },
    {
      id: 5,
      image: "/images/main-gallery.jpg",
      title: "TROPICAL\nPARADISE",
      description:
        "Experience the ultimate tropical getaway with pristine beaches and crystal clear waters.",
      subDescription:
        "Indonesia offers over 17,000 islands, each with its own unique beauty and cultural heritage.",
    },
  ];

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleScrollToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const handleScrollToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${currentImage.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-500 ease-in-out">
            {currentImage.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <div className="max-w-md mb-6 sm:mb-8">
            <p className="text-white/90 text-sm leading-relaxed mb-4 transition-all duration-500 ease-in-out">
              {currentImage.description}
            </p>
            <p className="text-white/90 text-sm leading-relaxed transition-all duration-500 ease-in-out">
              {currentImage.subDescription}
            </p>
          </div>

          <button
            onClick={handleScrollToNext}
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wider">SWIPE</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 delay-75" />
          </button>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={handleScrollToPrev}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleScrollToNext}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Position Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
