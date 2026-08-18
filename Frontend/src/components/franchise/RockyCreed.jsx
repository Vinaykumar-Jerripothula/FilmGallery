import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { rockyCreedData } from "../../data/franchise/rockyCreedData"
import rockycreedImage from "../../images/franchise/rockycreed/rockycreedImage.jpeg";

function RockyCreed() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.rockycreed || 0;

  const total = rockyCreedData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Rocky Creed Franchise"
          subtitle="Franchise"
          image={rockycreedImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Rocky Creed CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Rocky Creed Franchise"
          content={rockyCreedData}
          contentId="rockycreed"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default RockyCreed;