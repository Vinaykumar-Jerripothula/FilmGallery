import { expendablesData } from "../../data/tetralogy/expandablesData";
import FranchiseAccordion from "../template/FranchiseAccordion";

function Expandables({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Expandables"
      content={expendablesData}
      contentId={"expandables"}
      completedCount={progressMap.expendables || 0}
    />
  );
}

export default Expandables;