const Barometer = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">Barometer</h1>
      <p className="text-gray-700 mb-4">
        A barometer is an instrument for measuring atmospheric pressure. The
        mercury barometer was invented by Italian mathematician and physicist
        Evangelista Torricelli in 1644, it was a plate with mercury poured into
        it and a test tube placed with a hole in it.
      </p>
      <div className="bg-orange-100 p-4 rounded-lg">
         <span className="text-xl">+1 Bonus</span>
      </div>
    </div>
  );
};

export { Barometer };
