import FranchiseAccordion from "./FranchiseAccordion";
import { jurassicParkData } from "../data/jurassicParkData";

function JurassicPark({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Jurassic Park"
      content={jurassicParkData}
      contentId={"jurassicpark"}
      completedCount={progressMap.jurassicpark || 0}
    />
  );
}

export default JurassicPark;