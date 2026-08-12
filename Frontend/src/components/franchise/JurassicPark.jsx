import FranchiseAccordion from "../template/FranchiseAccordion";
import { jurassicParkData } from "../../data/franchise/jurassicParkData";

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