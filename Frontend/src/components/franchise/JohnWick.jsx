import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { johnWickData } from "../../data/franchise/johnWickData"
import johnwickImage from "../../images/franchise/johnwick/johnwickImage.jpeg";

function JohnWick() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.johnwick || 0;

  const total = johnWickData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="John Wick Franchise"
          subtitle="Franchise"
          image={johnwickImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= John Wick CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="John Wick Franchise"
          content={johnWickData}
          contentId="johnwick"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default JohnWick;