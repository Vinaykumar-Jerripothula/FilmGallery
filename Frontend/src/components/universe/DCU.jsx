import FranchiseAccordion from "../template/FranchiseAccordion";
  import { dcuData } from "../../data/universe/dcuData";

  function DCU({ progressMap }) {
    return (
      <FranchiseAccordion
        franchiseName="DCU Universe"
        content={dcuData}
        contentId={"dcu"}
        completedCount={progressMap.dcu || 0}
      />
    );
  }

  export default DCU;