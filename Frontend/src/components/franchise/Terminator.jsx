import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { terminatorData } from "../../data/franchise/terminatorData";
import terminatorImage from "../../images/franchise/terminator/terminatorImage.jpeg";

function Terminator() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.terminator || 0;

  const total = terminatorData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Terminator Franchise"
          subtitle="Franchise"
          image={terminatorImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Terminator CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Terminator Franchise"
          content={terminatorData}
          contentId="terminator"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Terminator;