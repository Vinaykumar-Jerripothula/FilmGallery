import FranchiseAccordion from "./FranchiseAccordion";
import { jurassicParkData } from "../data/jurassicParkData";

function JurassicPark() {
  return (
    <FranchiseAccordion
      franchiseName="Jurassic Park"
      content={jurassicParkData}
    />
  );
}

export default JurassicPark;