import FranchiseAccordion from "../template/FranchiseAccordion";
import { mcuData } from "../../data/universe/mcuData";

function MCU({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Marvel Cinematic Universe"
      content={mcuData}
      contentId="mcu"
      completedCount={progressMap.mcu || 0}
    />
  );
}

export default MCU;