export const TravelSection = () => {
  return (
    <section
      id="travel-section"
      className="relative pt-0 pb-20 bg-gradient-to-b from-black via-transparent to-transparent overflow-hidden"
    >
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/quOTe_3G5B4?autoplay=1&mute=1&loop=1&playlist=quOTe_3G5B4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          loading="lazy"
          frameBorder="0"
          title="Background video"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/20"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
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

              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md mb-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                The Raja Ampat Islands are a group of islands located in the
                westernmost of the Bird&apos;s Head Peninsula on the island of
                New Guinea. Administratively, this cluster is under Raja Ampat
                Regency, West Papua Province, Indonesia.
              </p>
            </div>

            <div className="relative hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
