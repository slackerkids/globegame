import {
  Trees,
  Satellite,
  Map,
  Camera,
  BookOpen,
  Sprout,
  Leaf,
  Cloud,
  ThermometerSun,
  Microscope,
  Wind,
  Binary,
  Calendar,
  Mountain,
  Droplets,
  Globe,
} from "lucide-react";

const LandCoverSpecialist = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center">
          <Trees className="mr-2" />
          Land Cover Specialist
        </h1>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          Environmental Science
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        A Land Cover Specialist is the eyes of environmental science, expertly
        analyzing and documenting changes in Earth's surface features. From
        forests to urban sprawl, we track how our planet's skin transforms over
        time.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start">
          <Microscope className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Analysis Tools</h2>
            <p className="text-sm text-gray-600">
              GIS software, satellite imagery, aerial photography
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Satellite className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Data Sources</h2>
            <p className="text-sm text-gray-600">
              Remote sensing, field surveys, historical records
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Map className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Key Focus Areas</h2>
            <p className="text-sm text-gray-600">
              Vegetation changes, urbanization, deforestation
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Camera className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Field Work</h2>
            <p className="text-sm text-gray-600">
              Ground truthing, sample collection, site documentation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2 flex items-center">
          <BookOpen className="mr-2 text-green-600" />
          GLOBE Protocol Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Land Cover Classification</li>
          <li>Biometry Protocols</li>
          <li>Phenology Monitoring</li>
          <li>Green-Up/Green-Down Studies</li>
        </ul>
      </div>

      <div className="text-sm text-gray-500 italic">
        "From pixel to ecosystem, we map the changing face of our planet."
      </div>
    </div>
  );
};

const SoilSpecialist = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-brown-700 flex items-center">
          <Sprout className="mr-2" />
          Soil Specialist
        </h1>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          Soil Science
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Soil Specialists are the ground-level detectives of environmental
        science, analyzing the complex world beneath our feet. We study soil
        composition, health, and behavior to understand ecosystem foundations.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start">
          <Microscope className="mr-2 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Analysis Methods</h2>
            <p className="text-sm text-gray-600">
              pH testing, particle size analysis, organic content assessment
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Mountain className="mr-2 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Field Work</h2>
            <p className="text-sm text-gray-600">
              Soil sampling, infiltration tests, erosion monitoring
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2 flex items-center">
          <Globe className="mr-2 text-amber-600" />
          GLOBE Protocol Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Soil Characterization</li>
          <li>Soil Moisture Measurement</li>
          <li>Soil Temperature Monitoring</li>
          <li>Soil Particle Distribution Analysis</li>
        </ul>
      </div>
    </div>
  );
};

const BioEcologist = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center">
          <Leaf className="mr-2" />
          Bio-Ecologist
        </h1>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          Ecological Science
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Bio-Ecologists study the intricate web of relationships between living
        organisms and their environment. We explore biodiversity, ecosystem
        dynamics, and the impacts of environmental change.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start">
          <Microscope className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Research Tools</h2>
            <p className="text-sm text-gray-600">
              DNA sequencing, population modeling, biodiversity indices
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Binary className="mr-2 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Data Analysis</h2>
            <p className="text-sm text-gray-600">
              Statistical modeling, ecosystem mapping, species distribution
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2 flex items-center">
          <Globe className="mr-2 text-green-600" />
          GLOBE Protocol Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Biometry Protocols</li>
          <li>Land Cover Biology</li>
          <li>Species Identification</li>
          <li>Phenology Monitoring</li>
        </ul>
      </div>
    </div>
  );
};

const Meteorologist = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center">
          <Cloud className="mr-2" />
          Meteorologist
        </h1>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          Atmospheric Science
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Meteorologists are the weather detectives, analyzing atmospheric
        conditions to forecast weather patterns and study climate phenomena. We
        use advanced technology to understand the complex dynamics of Earth's
        atmosphere.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start">
          <Wind className="mr-2 text-blue-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Measurement Tools</h2>
            <p className="text-sm text-gray-600">
              Weather balloons, radar systems, satellite data
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Droplets className="mr-2 text-blue-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Key Parameters</h2>
            <p className="text-sm text-gray-600">
              Temperature, humidity, precipitation, wind patterns
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2 flex items-center">
          <Globe className="mr-2 text-blue-600" />
          GLOBE Protocol Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Cloud Observations</li>
          <li>Precipitation Measurement</li>
          <li>Surface Temperature Monitoring</li>
          <li>Aerosols Optical Thickness</li>
        </ul>
      </div>
    </div>
  );
};

const Climatologist = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-purple-700 flex items-center">
          <ThermometerSun className="mr-2" />
          Climatologist
        </h1>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
          Climate Science
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Climatologists are the long-term weather historians and future
        predictors, studying patterns over decades and centuries. We analyze
        climate data to understand global changes and their impacts on Earth's
        systems.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start">
          <Calendar className="mr-2 text-purple-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Time Scales</h2>
            <p className="text-sm text-gray-600">
              Paleoclimate data, decadal trends, future projections
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Binary className="mr-2 text-purple-600 flex-shrink-0" />
          <div>
            <h2 className="font-semibold mb-1">Analysis Methods</h2>
            <p className="text-sm text-gray-600">
              Climate modeling, data reconstruction, trend analysis
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2 flex items-center">
          <Globe className="mr-2 text-purple-600" />
          GLOBE Protocol Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Long-term Temperature Monitoring</li>
          <li>Precipitation Patterns Analysis</li>
          <li>Phenology and Climate Connections</li>
          <li>Surface Temperature Trend Analysis</li>
        </ul>
      </div>
    </div>
  );
};

export {
  SoilSpecialist,
  BioEcologist,
  Meteorologist,
  Climatologist,
  LandCoverSpecialist,
};
