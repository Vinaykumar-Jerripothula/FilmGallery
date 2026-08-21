import { universeData } from "./universeData";
import { franchiseData } from "./franchiseData";
import { seriesData } from "./webseries";
import { duologyData } from "./duologyData";
import { triologyData } from "./trilogyData";
import { tetralogyData } from "./tetralogyData";

export const allCollectionsData = [
  ...universeData,
  ...franchiseData,
  ...seriesData,
  ...duologyData,
  ...triologyData,
  ...tetralogyData,
];