"use client";

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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm mb-2 tracking-wider">
            CONSULTANT TRAVEL RECOMMENDATION
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            destination recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Place Ranking */}
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-white text-sm font-medium">
                    {destination.place}
                  </p>
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    {destination.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                {destination.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
