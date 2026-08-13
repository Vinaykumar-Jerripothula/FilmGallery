import FranchiseAccordion from "../template/FranchiseAccordion";
import { killBillData } from "../../data/duology/killBillData";

function KillBill({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Kill Bill"
      content={killBillData}
      contentId={"killbill"}
      completedCount={progressMap.killbill || 0}
    />
  );
}

export default KillBill;