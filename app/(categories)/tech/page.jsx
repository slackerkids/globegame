import Image from "next/image";
import Link from "next/link";

const CharTypes = [
  {
    id: 1,
    title: "Barometer",
    description: "A barometer is an instrument for measuring atmospheric pressure.",
    image: "/images/tech/barometer.png",
    category: "+1 bonus",
    link: "/tech/1",
  },
];

const Cataclysm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 mt-10">Characters</h1>
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
                <Link href={post.link} className="btn btn-primary">
                  Check card{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cataclysm;
