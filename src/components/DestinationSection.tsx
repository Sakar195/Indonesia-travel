"use client";

import { DestinationCard } from "./DestinationCard";

export const DestinationSection = () => {
  const destinations = [
    {
      id: 1,
      place: "1st place",
      name: "Raja Ampat Island",
      image: "/images/raja-ampat.jpg",
      description: "Turquoise waters and coral reefs",
    },
    {
      id: 2,
      place: "2nd place",
      name: "Banda Islands",
      image: "/images/banda-island.jpg",
      description: "Historic spice islands with diving",
    },
    {
      id: 3,
      place: "3rd place",
      name: "Penida Island",
      image: "/images/penida-island.jpg",
      description: "Cliff views and marine life",
    },
    {
      id: 4,
      place: "4th place",
      name: "Mt Bromo",
      image: "/images/mt-bromo.jpg",
      description: "Volcanic sunrise and crater hike",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block">
            <p className="text-white/70 text-sm mb-3 tracking-[0.2em] uppercase bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
              Discover Paradise
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-6 mb-4">
            Popular Destinations
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Explore Indonesia&apos;s most breathtaking locations, from pristine
            beaches to ancient temples, each destination offering unique
            experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="transform hover:-translate-y-2 transition-transform duration-300 ease-out"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};
