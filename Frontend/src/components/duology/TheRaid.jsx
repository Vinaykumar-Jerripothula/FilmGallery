import FranchiseAccordion from "../template/FranchiseAccordion";
import { theRaidData } from "../../data/duology/theRaidData";

function TheRaid({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Raid"
      content={theRaidData}
      contentId={"theraid"}
      completedCount={progressMap.theraid || 0}
    />
  );
}

export default TheRaid;