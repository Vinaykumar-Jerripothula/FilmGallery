import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { madMaxData } from "../../data/franchise/madMaxData";
import madMaxImage from "../../images/franchise/madmax/madmaxImage.jpeg";

function FastAndFurious() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.madmax || 0;

  const total = madMaxData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Mad Max Franchise"
          subtitle="Franchise"
          image={madMaxImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Mad Max CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Mad Max Franchise"
          content={madMaxData}
          contentId="madmax"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default FastAndFurious;