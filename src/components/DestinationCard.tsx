interface DestinationCardProps {
  destination: {
    id: number;
    place: string;
    name: string;
    image: string;
    description: string;
  };
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="group cursor-pointer w-full">
      <div className="relative h-64 md:h-80 lg:h-96 mb-4 overflow-hidden rounded-xl w-full">
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
          <p className="text-white text-sm font-medium">{destination.place}</p>
          <h3 className="text-white text-lg font-semibold leading-tight">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
        {destination.description}
      </p>
    </div>
  );
};
