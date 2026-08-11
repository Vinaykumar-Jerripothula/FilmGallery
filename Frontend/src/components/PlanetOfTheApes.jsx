import FranchiseAccordion from "./FranchiseAccordion";

import { planetOfTheApesData } from "../data/planetOfTheApes";

function PlanetOfTheApes() {
  return (
    <FranchiseAccordion
      franchiseName="Planet Of The Apes"
      content={planetOfTheApesData}
    />
  );
}

export default PlanetOfTheApes;