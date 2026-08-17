import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { badBoysData } from "../../data/tetralogy/badboysData";
import badboysImage from "../../images/franchise/badboys/badboysImage.jpeg";

function BadBoys() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.badboys || 0;

  const total = badBoysData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Bad Boys Franchise"
          subtitle="Franchise"
          image={badboysImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Bad Boys CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Alien Franchise"
          content={badBoysData}
          contentId="badboys"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default BadBoys;