export const HighlightsSection = () => {
  const destinations = [
    {
      id: 1,
      place: "1st place",
      name: "Raja Ampat Island",
      image: "/images/raja-ampat.jpg",
      description:
        "A diver's paradise with crystal-clear waters and the world's richest marine biodiversity.",
      longDescription: "Turquoise waters and coral reefs",
    },
    {
      id: 2,
      place: "2nd place",
      name: "Banda Islands",
      image: "/images/banda-island.jpg",
      description:
        "Historic spice islands where nutmeg was once worth more than gold.",
      longDescription: "Historic spice islands with diving",
    },
    {
      id: 3,
      place: "3rd place",
      name: "Penida Island",
      image: "/images/penida-island.jpg",
      description:
        "Dramatic cliff formations and pristine beaches off the coast of Bali.",
      longDescription: "Cliff views and marine life",
    },
    {
      id: 4,
      place: "4th place",
      name: "Mt Bromo",
      image: "/images/mt-bromo.jpg",
      description:
        "An active volcano offering spectacular sunrise views over the lunar landscape.",
      longDescription: "Volcanic sunrise and crater hike",
    },
  ];

  return (
    <section
      id="highlights-section"
      className="py-20 bg-gradient-to-b from-amber-50/80 via-amber-50/70 to-orange-50/60"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-900 text-sm uppercase tracking-[0.2em] mb-2 bg-black/5 px-6 py-2 rounded-full backdrop-blur-sm inline-block border border-black/10">
            Highlights
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            Must-Visit Places
          </h2>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                {/* Card */}
                <div className="relative h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${destination.image}')`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight drop-shadow-lg">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center text-white p-6">
                      <h4 className="text-xl font-semibold mb-2">
                        Explore {destination.name}
                      </h4>
                      <p className="text-sm text-white/90">
                        {destination.longDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
