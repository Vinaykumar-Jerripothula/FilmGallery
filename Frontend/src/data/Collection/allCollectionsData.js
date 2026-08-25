import { universeData } from "../hollywood/universe/universeData";
import { franchiseData } from "../hollywood/franchise/franchiseData";
import { seriesData } from "../hollywood/webseries/webseries";
import { duologyData } from "./../hollywood/duology/duologyData";
import { triologyData } from "../hollywood/trilogy/trilogyData";
import { tetralogyData } from "../hollywood/tetralogy/tetralogyData";

export const allCollectionsData = [
  ...universeData,
  ...franchiseData,
  ...seriesData,
  ...duologyData,
  ...triologyData,
  ...tetralogyData,
];