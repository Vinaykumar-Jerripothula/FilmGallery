import FranchiseAccordion from "../template/FranchiseAccordion";
import { sherlockHolmesData } from "../../data/duology/sherlockHolmesData";

function SherlockHolmes({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Sherlock Holmes"
      content={sherlockHolmesData}
      contentId={"sherlockholmes"}
      completedCount={progressMap.sherlockholmes || 0}
    />
  );
}

export default SherlockHolmes;