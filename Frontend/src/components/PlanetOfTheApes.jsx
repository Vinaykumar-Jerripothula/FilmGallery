import FranchiseAccordion from "./FranchiseAccordion";

import { planetOfTheApesData } from "../data/planetOfTheApes";

function PlanetOfTheApes({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Planet Of The Apes"
      content={planetOfTheApesData}
      contentId={"planetoftheapes"}
      completedCount={progressMap.planetoftheapes || 0}
    />
  );
}

export default PlanetOfTheApes;