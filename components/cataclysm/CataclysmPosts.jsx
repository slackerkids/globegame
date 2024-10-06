import {
  AlertTriangle,
  Wind,
  Thermometer,
  CloudRain,
  Cloud,
  Flame,
  Mountain,
  CloudLightning,
  Waves,
  Factory,
  Droplets,
} from "lucide-react";

const DroughtPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Droplets className="mr-2 text-orange-500" />
        When Every Drop Counts: Understanding Drought Crisis
      </h1>
      <p className="text-gray-700 mb-4">
        As our planet faces increasing climate challenges, droughts have become
        more frequent and severe. These extended periods of water shortage don't
        just mean dry weather – they represent a crisis that affects
        agriculture, water supplies, and entire ecosystems. Using advanced
        hydrological sensors, scientists can now track water levels with
        unprecedented accuracy, helping communities prepare and adapt.
      </p>
      <div className="bg-orange-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Impacts:</h2>
        <ul className="list-disc list-inside">
          <li>Crop failure and reduced agricultural output</li>
          <li>Water stress in urban areas</li>
          <li>Increased risk of wildfires</li>
        </ul>
      </div>
    </div>
  );
};

const FloodPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <CloudRain className="mr-2 text-blue-500" />
        Rising Waters: The Growing Threat of Floods
      </h1>
      <p className="text-gray-700 mb-4">
        When rivers overflow and streets become streams, communities face one of
        nature's most common yet devastating disasters: flooding. Whether caused
        by heavy rainfall, storm surges, or rapid snow melt, floods can
        transform landscapes in minutes. Modern monitoring systems, including
        advanced water level sensors and precipitation gauges, now provide
        crucial early warnings.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Protection Strategies:</h2>
        <ul className="list-disc list-inside">
          <li>Implementation of flood barriers and levels</li>
          <li>Development of emergency evacuation plans</li>
          <li>Creation of water retention areas</li>
        </ul>
      </div>
    </div>
  );
};

const HurricanePost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Wind className="mr-2 text-gray-500" />
        Eye of the Storm: Surviving Hurricane Season
      </h1>
      <p className="text-gray-700 mb-4">
        Hurricanes – nature's most powerful storms – can reshape coastlines and
        devastate communities with their triple threat of high winds, heavy
        rain, and storm surges. As climate change affects ocean temperatures,
        scientists warn of potentially more intense hurricane seasons. Today's
        advanced tracking systems, using anemometers and barometers, help
        meteorologists predict paths and intensities with growing accuracy.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Preparation Checklist:</h2>
        <ul className="list-disc list-inside">
          <li>Secure important documents in waterproof containers</li>
          <li>Prepare emergency kit with food and water</li>
          <li>Know your evacuation route</li>
        </ul>
      </div>
    </div>
  );
};

const EarthquakePost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <AlertTriangle className="mr-2 text-red-500" />
        Shaken Earth: The Science Behind Earthquakes
      </h1>
      <p className="text-gray-700 mb-4">
        In seconds, earthquakes can level cities and change landscapes forever.
        These sudden releases of energy, caused by shifting tectonic plates,
        remind us of Earth's raw power. While we can't prevent them,
        seismographs and other monitoring equipment help scientists better
        understand and predict seismic activity, potentially saving countless
        lives through early warning systems.
      </p>
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Safety Tips:</h2>
        <ul className="list-disc list-inside">
          <li>Drop, Cover, and Hold On during shaking</li>
          <li>Prepare emergency kits for home and car</li>
          <li>Know how to shut off gas and water</li>
        </ul>
      </div>
    </div>
  );
};

const HeatWavePost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Thermometer className="mr-2 text-red-500" />
        When the Mercury Rises: Surviving Extreme Heat
      </h1>
      <p className="text-gray-700 mb-4">
        Heat waves – extended periods of excessive heat – are becoming more
        frequent and intense due to climate change. These silent killers can
        cause severe health issues, strain power grids, and damage
        infrastructure. Modern temperature monitoring systems help
        meteorologists predict and track heat waves, allowing communities to
        prepare and protect vulnerable populations.
      </p>
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Survival Strategies:</h2>
        <ul className="list-disc list-inside">
          <li>Stay hydrated and avoid outdoor activities</li>
          <li>Find air-conditioned spaces</li>
          <li>Check on elderly neighbors and vulnerable individuals</li>
        </ul>
      </div>
    </div>
  );
};

const AvalanchePost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Mountain className="mr-2 text-blue-500" />
        White Death: Understanding Avalanche Dangers
      </h1>
      <p className="text-gray-700 mb-4">
        In mountainous regions, few natural phenomena are as feared as
        avalanches. These rapid flows of snow can reach speeds of 80 mph,
        obliterating everything in their path. Using advanced tools like snow
        probes and thermal imaging, experts can assess snowpack stability and
        predict potential avalanche conditions, helping to keep mountain
        communities and winter sports enthusiasts safer.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Essential Knowledge:</h2>
        <ul className="list-disc list-inside">
          <li>Always check avalanche forecasts before mountain activities</li>
          <li>Carry proper safety equipment (beacon, probe, shovel)</li>
          <li>Know how to recognize avalanche terrain</li>
        </ul>
      </div>
    </div>
  );
};

const AirPollutionPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Cloud className="mr-2 text-gray-500" />
        The Invisible Threat: Air Pollution Crisis
      </h1>
      <p className="text-gray-700 mb-4">
        While not as dramatic as other natural disasters, air pollution poses a
        silent, deadly threat to millions globally. Modern cities grapple with
        this invisible enemy, measurable only through sophisticated air quality
        sensors detecting particulates, CO₂, and other harmful substances. As
        urbanization accelerates, the battle for clean air becomes increasingly
        crucial for public health and environmental stability.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Health Impacts:</h2>
        <ul className="list-disc list-inside">
          <li>Respiratory diseases and cardiovascular problems</li>
          <li>Reduced life expectancy in heavily polluted areas</li>
          <li>Increased risk of certain cancers</li>
        </ul>
      </div>
    </div>
  );
};

const ForestFirePost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Flame className="mr-2 text-orange-500" />
        Inferno: When Forests Burn
      </h1>
      <p className="text-gray-700 mb-4">
        Forest fires, whether sparked by lightning or human activity, can
        quickly transform lush woodlands into apocalyptic landscapes. These
        blazes not only destroy habitats and property but also release massive
        amounts of carbon into the atmosphere. Using thermal imaging and
        humidity sensors, fire services can now predict high-risk conditions and
        respond more effectively to outbreaks.
      </p>
      <div className="bg-orange-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Prevention Strategies:</h2>
        <ul className="list-disc list-inside">
          <li>Create defensible space around buildings</li>
          <li>Implement controlled burning practices</li>
          <li>Maintain updated evacuation plans</li>
        </ul>
      </div>
    </div>
  );
};

const VolcanicEruptionPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Mountain className="mr-2 text-red-500" />
        Earth's Fury: Volcanic Eruptions Unleashed
      </h1>
      <p className="text-gray-700 mb-4">
        When the earth splits open and molten rock surges to the surface, few
        natural phenomena can match the raw power of volcanic eruptions. These
        geological events not only reshape landscapes but can affect global
        climate patterns. Modern monitoring equipment, including gas analyzers
        and seismographs, helps volcanologists predict eruptions, potentially
        saving countless lives.
      </p>
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Eruption Hazards:</h2>
        <ul className="list-disc list-inside">
          <li>Pyroclastic flows and lava</li>
          <li>Toxic gas emissions</li>
          <li>Ash fall affecting air travel and respiratory health</li>
        </ul>
      </div>
    </div>
  );
};

const AcidRainPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <CloudLightning className="mr-2 text-purple-500" />
        Toxic Downpour: The Acid Rain Menace
      </h1>
      <p className="text-gray-700 mb-4">
        When precipitation becomes a poison, the result is acid rain - a
        human-induced environmental crisis that affects ecosystems,
        architecture, and human health. Caused primarily by industrial
        emissions, this phenomenon can travel thousands of miles from its
        source. pH meters and sophisticated monitoring networks help scientists
        track acid rain patterns and their devastating effects.
      </p>
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Environmental Impacts:</h2>
        <ul className="list-disc list-inside">
          <li>Acidification of lakes and streams</li>
          <li>Damage to forests and soil degradation</li>
          <li>Corrosion of buildings and monuments</li>
        </ul>
      </div>
    </div>
  );
};

const TsunamiPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Waves className="mr-2 text-blue-500" />
        Tsunami: The Unstoppable Wave
      </h1>
      <p className="text-gray-700 mb-4">
        Born from underwater earthquakes or landslides, tsunamis are nature's
        maritime wrecking balls. These massive waves can cross entire oceans,
        growing in height as they approach shorelines. Thanks to advanced
        warning systems, including deep-ocean sensors and seismographs, coastal
        communities now have precious minutes or hours to evacuate before these
        devastating waves make landfall.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Warning Signs:</h2>
        <ul className="list-disc list-inside">
          <li>Sudden, unusual ocean retreat</li>
          <li>Loud roaring sound from the ocean</li>
          <li>Strong earthquake in coastal areas</li>
        </ul>
      </div>
    </div>
  );
};

const DesertificationPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Factory className="mr-2 text-yellow-500" />
        Advancing Sands: The Creep of Desertification
      </h1>
      <p className="text-gray-700 mb-4">
        As fertile lands gradually transform into deserts, communities face a
        slow-moving yet devastating environmental crisis. Desertification,
        driven by climate change and human activities, threatens food security
        and livelihoods globally. Using soil moisture meters and satellite
        imaging, scientists track this process, developing strategies to combat
        the advance of the desert.
      </p>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Mitigation Strategies:</h2>
        <ul className="list-disc list-inside">
          <li>Sustainable land management practices</li>
          <li>Planting drought-resistant vegetation</li>
          <li>Improved irrigation techniques</li>
        </ul>
      </div>
    </div>
  );
};

const WaterPollutionPost = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Droplets className="mr-2 text-blue-500" />
        Poisoned Waters: The Water Pollution Crisis
      </h1>
      <p className="text-gray-700 mb-4">
        Clean water, essential for all life, faces an increasing threat from
        pollution. Industrial waste, agricultural runoff, and urban sewage
        contaminate our rivers, lakes, and oceans, creating dead zones and
        threatening both aquatic ecosystems and human health. Water quality
        testing kits and advanced monitoring systems help scientists track
        pollutants and develop targeted cleanup strategies.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Common Pollutants:</h2>
        <ul className="list-disc list-inside">
          <li>Industrial chemicals and heavy metals</li>
          <li>Nutrient pollution from fertilizers</li>
          <li>Microplastics and petroleum products</li>
        </ul>
      </div>
    </div>
  );
};

export {
  DroughtPost,
  FloodPost,
  HurricanePost,
  EarthquakePost,
  HeatWavePost,
  AvalanchePost,
  AirPollutionPost,
  ForestFirePost,
  VolcanicEruptionPost,
  AcidRainPost,
  TsunamiPost,
  DesertificationPost,
  WaterPollutionPost,
};
