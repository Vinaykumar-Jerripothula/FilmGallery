import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import dcuImage from "../../images/universe/dcu/dcuImage.jpeg";
import { dcuData } from "../../data/universe/dcuData"

function DCU() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.dcu || 0;

  const total = dcuData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Detective Comics Universe"
          subtitle="Cinematic Universe"
          image={dcuImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= DCU CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Detective Comics Universe"
          content={dcuData}
          contentId="dcu"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default DCU;