import Image from "next/image";
import Link from "next/link";

const CharTypes = [
  {
    id: 1,
    title: "Land Cover Scientist",
    description:
      "Can carry any amount of equipment.",
    image: "/images/char/land_cover.png",
    category: "",
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
];

const Cataclysm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 mt-10">Cataclysm Types</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CharTypes.map((post) => (
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
