import { universeData } from "../hollywood/universe/universeData";
import { franchiseData } from "../hollywood/franchise/franchiseData";
import { seriesData } from "../hollywood/webseries/webseries";
import { duologyData } from "./../hollywood/duology/duologyData";
import { triologyData } from "../hollywood/trilogy/trilogyData";
import { tetralogyData } from "../hollywood/tetralogy/tetralogyData";

// korean
import { franchiseData as koreanFranchiseData } from "../korean/franchise/franchiseData";
import { seriesData as koreanSeriesData } from "../korean/webseries/webseries";

// Anime
import { franchiseData as animeFranchiseData } from "../anime/franchise/franchiseData";
import { universeData as animeUniverseData } from "../anime/universe/universeData";

export const allCollectionsData = [
  ...universeData,
  ...franchiseData,
  ...seriesData,
  ...duologyData,
  ...triologyData,
  ...tetralogyData,

  // Korean
  ...koreanFranchiseData,
  ...koreanSeriesData,

  // Anime
  ...animeUniverseData,
  ...animeFranchiseData,
];

