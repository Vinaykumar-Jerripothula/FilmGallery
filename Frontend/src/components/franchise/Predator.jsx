import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { predatorData } from "../../data/franchise/predatorData";
import predatorImage from "../../images/franchise/predator/predatorImage.jpeg";

function Predator() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.predator || 0;

  const total = predatorData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Predator Franchise"
          subtitle="Franchise"
          image={predatorImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Predator CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Predator Franchise"
          content={predatorData}
          contentId="predator"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Predator;