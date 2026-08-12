import FranchiseAccordion from "../template/FranchiseAccordion";

import { planetOfTheApesData } from "../../data/franchise/planetOfTheApes";

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