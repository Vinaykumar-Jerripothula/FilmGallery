import FranchiseAccordion from "../template/FranchiseAccordion";
import { topGunData } from "../../data/duology/topGunData";

function TopGun({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Top Gun"
      content={topGunData}
      contentId={"topgun"}
      completedCount={progressMap.topgun || 0}
    />
  );
}

export default TopGun;