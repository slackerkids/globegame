import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/earth.jpg"
          alt="Earth background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-1 flex items-center justify-center min-h-screen bg-black/50">
        <div className="hero-content text-center text-white">
          <div className="max-w-md sm:max-w-xl lg:max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Become a Hero of the Earth – Fight Cataclysms with Science!
            </h1>
            <p className="py-6 font-medium">
              Join forces with the GLOBE program and protect our planet. Use
              your scientific knowledge and advanced technology to prevent
              disasters and build a sustainable future!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;