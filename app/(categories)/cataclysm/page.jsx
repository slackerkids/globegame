import Image from "next/image";
import Link from "next/link";

const CataclysmTypes = [
  {
    id: 1,
    title: "Drought",
    description:
      "Extended period of water shortage, causing crop failure and water stress. Can last months or years, severely impacting agriculture and water supplies.",
    image: "/images/cataclysm/drought.jpg",
    category: "Water-Related Disaster",
    link: "/cataclysm/1",
  },
  {
    id: 2,
    title: "Flooding",
    description:
      "Overflow of water onto normally dry land. Can occur rapidly (flash floods) or slowly, causing widespread damage to property and infrastructure.",
    image: "/images/cataclysm/flooding.jpg",
    category: "Water-Related Disaster",
    link: "/cataclysm/2",
  },
  {
    id: 3,
    title: "Tsunamis",
    description:
      "Giant ocean waves triggered by underwater earthquakes or landslides. Can travel across entire oceans, devastating coastal areas with little warning.",
    image: "/images/cataclysm/tsunami.jpg",
    category: "Water-Related Disaster",
    link: "/cataclysm/3",
  },
  {
    id: 4,
    title: "Hurricanes",
    description:
      " Powerful tropical storms with winds exceeding 74 mph. Cause damage through high winds, storm surges, and heavy rainfall.",
    image: "/images/cataclysm/hurricane.jpg",
    category: "Atmospheric Event",
    link: "/cataclysm/4",
  },
  {
    id: 5,
    title: "Tornadoes",
    description:
      "Violently rotating columns of air, capable of destroying buildings and lifting heavy objects. Often occur with little warning.",
    image: "/images/cataclysm/tornado.jpg",
    category: "Atmospheric Event",
    link: "/cataclysm/5",
  },
  {
    id: 6,
    title: "Heat Waves",
    description:
      "Extended periods of abnormally high temperatures. Can cause health issues, drought, and increased fire risk.",
    image: "/images/cataclysm/heat_wave.jpg",
    category: "Atmospheric Event",
    link: "/cataclysm/6",
  },
  {
    id: 7,
    title: "Earthquake",
    description:
      "Sudden ground shaking caused by tectonic plate movement. Can trigger landslides, tsunamis, and building collapse.",
    image: "/images/cataclysm/earthquake.jpg",
    category: "Geological Disaster",
    link: "/cataclysm/7",
  },
  {
    id: 8,
    title: "Volcanic Eruptions",
    description:
      "Discharge of lava, ash, and gases from within the Earth. Can cause immediate destruction and long-term climate effects.",
    image: "/images/cataclysm/volcanic_eruptions.jpg",
    category: "Geological Disaster",
    link: "/cataclysm/8",
  },
  {
    id: 9,
    title: "Air Polution",
    description:
      "Contamination of air by harmful substances, affecting health and climate. Major sources include industry and vehicle emissions.",
    image: "/images/cataclysm/air_pollution.jpg",
    category: "Environmental Issue",
    link: "/cataclysm/9",
  },
  {
    id: 10,
    title: "Water Pollution",
    description:
      "Contamination of water bodies by chemicals, waste, or microorganisms. Impacts drinking water, aquatic life, and human health.",
    image: "/images/cataclysm/water_pollution.jpg",
    category: "Environmental Issue",
    link: "/cataclysm/10",
  },
  {
    id: 11,
    title: "Soil Erosion",
    description:
      "Removal of topsoil faster than it can be replenished. Reduces agricultural productivity and can lead to desertification.",
    image: "/images/cataclysm/soil_erosion.jpg",
    category: "Environmental Issue",
    link: "/cataclysm/11",
  },
  {
    id: 12,
    title: "Glacier Melting:",
    description:
      "Accelerated ice loss due to global warming. Contributes to sea level rise and changes in water availability.",
    image: "/images/cataclysm/glacier_melt.jpg",
    category: "Arctic and Mountain Hazards",
    link: "/cataclysm/12",
  },
  {
    id: 13,
    title: "Avalanches",
    description:
      "Rapid flow of snow down slopes. Can be triggered by weather changes, earthquakes, or human activity.",
    image: "/images/cataclysm/avalanches.webp",
    category: "Arctic and Mountain Hazards",
    link: "/cataclysm/13",
  },
  {
    id: 14,
    title: "Acid Rain",
    description:
      "Precipitation containing elevated levels of acidic components. Damages plants, aquatic ecosystems, and buildings.",
    image: "/images/cataclysm/acid_rain.jpg",
    category: "Chemical Phenomena",
    link: "/cataclysm/14",
  },
];

const Cataclysm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 mt-10">Cataclysm Types</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CataclysmTypes.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="px-4 pt-4">
              <Image
                src={post.image}
                alt={post.title}
                className="rounded-xl h-48 w-full object-cover"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="badge badge-primary mb-2">{post.category}</div>
              <h2 className="card-title">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="card-actions mt-4">
                <Link href={post.link} className="btn btn-primary">Check card </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cataclysm;
