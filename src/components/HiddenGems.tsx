"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HiddenGems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const gems = [
    {
      id: 1,
      name: "Kampung Naga",
      image: "/images/kampung-naga-hg.jpg",
      description: "Sundanese village preserving traditional lifestyle",
    },
    {
      id: 2,
      name: "Wae Rebo Village",
      image: "/images/wae-rebo-hg.jpg",
      description: "Traditional cone-shaped houses in the clouds",
    },
    {
      id: 3,
      name: "Ora Beach",
      image: "/images/ora-beach-hg.jpg",
      description: "Hidden coastal paradise with overwater bungalows",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gems.length) % gems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="hidden-gems"
      className="py-20 bg-gradient-to-b from-gray-900/90 via-black/80 to-black/70 text-white backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            Hidden Gems of Indonesia
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Discover lesser-known destinations that showcase the untouched
            beauty and charm of Indonesia.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[500px]">
          {gems.map((gem, index) => {
            const offset = (index - currentIndex + gems.length) % gems.length;
            let transform = "";
            let zIndex = 0;
            let opacity = 0;
            let display = "none";

            if (isMobile) {
              if (offset === 0) {
                transform = "translateX(0%) scale(1)";
                zIndex = 20;
                opacity = 1;
                display = "block";
              }
            } else {
              if (offset === 0) {
                transform = "translateX(0%) scale(1)";
                zIndex = 20;
                opacity = 1;
                display = "block";
              } else if (offset === 1) {
                transform = "translateX(60%) scale(0.85)";
                zIndex = 10;
                opacity = 1;
                display = "block";
              } else if (offset === gems.length - 1) {
                transform = "translateX(-60%) scale(0.85)";
                zIndex = 10;
                opacity = 1;
                display = "block";
              }
            }

            return (
              <div
                key={gem.id}
                className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out"
                style={{ transform, zIndex, opacity, display }}
                onClick={() => goToSlide(index)}
              >
                <div className="relative w-full md:w-4/5 h-full mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${gem.image}')` }}
                  >
                    <div
                      className={`absolute inset-0 bg-black/30 transition-all duration-500`}
                    ></div>
                  </div>
                  {offset === 0 && (
                    <>
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{gem.name}</h3>
                        <p className="text-white/90 max-w-md">
                          {gem.description}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
