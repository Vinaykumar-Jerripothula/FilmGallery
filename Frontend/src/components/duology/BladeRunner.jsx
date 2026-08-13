import FranchiseAccordion from "../template/FranchiseAccordion";
import { bladeRunnerData } from "../../data/duology/bladeRunnerData";

function BladeRunner({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Blade Runner"
      content={bladeRunnerData}
      contentId={"bladerunner"}
      completedCount={progressMap.bladerunner || 0}
    />
  );
}

export default BladeRunner;